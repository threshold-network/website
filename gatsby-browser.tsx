import { GatsbyBrowser } from "gatsby"
import { AppLayoutWrapper } from "./src/components"
import "@fontsource/ibm-plex-mono"
import "@fontsource/inter"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <AppLayoutWrapper {...props}>{element}</AppLayoutWrapper>
}
