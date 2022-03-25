import { GatsbyNode } from "gatsby"
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"
import { parse } from "svgson"
import { pathThatSvg } from "path-that-svg"
import fs from "fs"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions

  // Filter only for md files in the src/pages directory. Any md files found
  // outside of that should not have a page created for it
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(pages)/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // @ts-ignore
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const templateName = node.frontmatter.template || `default`
    const template = path.resolve(
      path.join("src/templates/", `${templateName}.tsx`)
    )
    createPage({
      path: node.fields.slug,
      component: template,
      context: { id: node.id }, // additional data can be passed via context
    })
  })
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions

    const typeDefs = `
    type SVGAttributes {
      key: String
      value: String
    }
    type SVG {
      name: String,
      type: String,
      value: String,
      attributes: [SVGAttributes]
      children: [SVG]
    }
  `
    createTypes(typeDefs)
  }

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  })
}

const svgCache = {}
const SVG_CACHE_ID_PREFIX = "svg-data-cache"
const convertSvgAttributesToArray = (object) => {
  for (const key in object) {
    if (typeof object[key] === "object")
      object[key] = convertSvgAttributesToArray(object[key])
  }

  if (object.hasOwnProperty("attributes"))
    object.attributes = Object.entries(object.attributes).map(
      ([key, value]) => ({
        key,
        value,
      })
    )

  return object
}

export const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
  reporter,
}) => {
  createResolvers({
    File: {
      svg: {
        type: "SVG",
        resolve: async (source) => {
          if (source.internal.mediaType !== "image/svg+xml") {
            return null
          }

          try {
            const cacheId = `${SVG_CACHE_ID_PREFIX}-${source.id}`
            const cachedData = svgCache[cacheId]

            if (cachedData) {
              reporter.info(`Loading data from cache; id: ${cacheId}`)
              return cachedData
            }

            const data = fs.readFileSync(source.absolutePath, {
              encoding: "utf-8",
            })
            // Convert svg elements such as `rect`, `circle`, `ellipse`, `line`,
            // `polyline` or `polygon` to `path`. It will help to build the
            // styleable svg icon components with Chakra.
            const path = await pathThatSvg(data)
            // Convert svg to an object.
            const parsedSvgElement = await parse(path)

            const svgEelement = convertSvgAttributesToArray(parsedSvgElement)
            svgCache[cacheId] = svgEelement
            reporter.info(`Saving svg data in cache; id ${cacheId}`)
            return svgEelement
          } catch (error) {
            reporter.panic(error)
            return null
          }
        },
      },
    },
  })
}
