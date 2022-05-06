import { GatsbyNode } from "gatsby"
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"
import MarkdownIt from "markdown-it"
import { proposalResolver, svgResolver } from "./gatsby/resolvers"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions

  // Filter only for md files in the `src/content/pages` directory. Any md files
  // found outside of that should not have a page created for it.
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/(pages)/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              seoTitle
              seoDescription
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
      path.join(`src/templates/${templateName}`, "index.tsx")
    )
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        id: node.id,
        seo: {
          title: node.frontmatter.seoTitle,
          description: node.frontmatter.seoDescription,
        },
      }, // additional data can be passed via context
    })
  })
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions, reporter }) => {
    const { createTypes, createFieldExtension } = actions

    createFieldExtension({
      name: "md",
      args: {
        from: {
          type: "String!",
          defaultValue: "",
        },
      },
      extend() {
        return {
          args: {
            from: "String",
          },
          resolve: async (source: any, args: { from: string }) => {
            const fieldValue = source[args.from]
            try {
              const md = new MarkdownIt()
              return md.render(fieldValue)
            } catch (error) {
              reporter.warn(
                `Could not render content from the "${args.from}" field... Using original value`
              )
              return fieldValue
            }
          },
        }
      },
    })

    const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      harnessThePower: Subitems
    }
    type ProposalContent {
      html: String
      raw: String
    }
    type Proposal {
      id: String
      title: String
      createdAt: String
      createdBy: String
      content: ProposalContent
      url: String
    }
    type Subitems {
      subitems: [Item]
    }
    type Item {
      title: String
      description: String @md(from: "description")
    }
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

export const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
  reporter,
}) => {
  createResolvers({
    Query: {
      allProposals: {
        type: "[Proposal]",
        args: {
          limit: {
            type: "Int",
            default: 3,
          },
        },
        resolve: proposalResolver(reporter),
      },
    },
    File: {
      svg: {
        type: "SVG",
        resolve: svgResolver(reporter),
      },
    },
  })
}
