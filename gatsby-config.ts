import { GatsbyConfig } from "gatsby"
import path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Threshold Network",
    url: "https://threshold.network",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Threshold Network",
        short_name: "T Network",
        description:
          "Threshold powers user sovereignty on the public blockchain.",
        start_url: "/",
        background_color: "#1D2229", // grey 900
        theme_color: "#7C47EE", // brand purple
        display: "standalone",
        icon: "src/static/images/favicon.png",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve("static/images"),
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve("src/content/components"),
        name: "components",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve("src/content/pages"),
        name: "pages",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve("/src/cms/cms.ts"),
      },
    },
  ],
  pathPrefix: process.env["PUBLIC_URL"],
}
export default config
