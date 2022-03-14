import { GatsbyConfig } from "gatsby"
import path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Threshold Network",
    url: "https://threshold.network",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve("src/pages"),
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve("src/footer"),
        name: "footer",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve("/src/cms/cms.ts"),
      },
    },
    "gatsby-transformer-remark",
  ],
}
export default config
