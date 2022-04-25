import { GatsbyBrowser } from "gatsby"
import { AppLayoutWrapper } from "./src/components"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  console.log("gatsby props ", props)
  return <AppLayoutWrapper {...props}>{element}</AppLayoutWrapper>
}
