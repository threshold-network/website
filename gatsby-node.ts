import { GatsbyNode } from "gatsby"
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"

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

export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      hero: Hero
    }
    type Hero {
      cta: Cta
    }
    type Cta {
      icon: Icon
    }
    type Icon {
      alt: String
      image: File @fileByRelativePath
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

export const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  })
}
