import { GatsbyBrowser } from "gatsby"
import { AppLayoutWrapper } from "./src/components"
import "@fontsource/ibm-plex-mono"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <AppLayoutWrapper {...props}>{element}</AppLayoutWrapper>
}
