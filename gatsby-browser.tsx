import { GatsbyBrowser } from "gatsby"
import { AppLayoutWrapper } from "./src/components"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <AppLayoutWrapper {...props}>{element}</AppLayoutWrapper>
}
