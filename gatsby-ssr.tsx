import React from "react"
import type { GatsbySSR } from "gatsby"

const COOKIE3_SCRIPT_VERSION = "0.11.24"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  if (process.env.GATSBY_COOKIE3_SITE_ID) {
    setHeadComponents([
      <script
        key="cookie3-analytics"
        src={`https://cdn.markfi.xyz/scripts/analytics/${COOKIE3_SCRIPT_VERSION}/cookie3.analytics.min.js`}
        integrity="sha384-lp8ATuGdLnhwAutE0SOVmSINtZ4DObSNjODmbbjYxaX92FOPBLyZjN+wVIaoK4Qy"
        crossOrigin="anonymous"
        {...{ "site-id": process.env.GATSBY_COOKIE3_SITE_ID }}
        async={true}
      />,
    ])
  }
}

export { wrapPageElement } from "./gatsby-browser"
