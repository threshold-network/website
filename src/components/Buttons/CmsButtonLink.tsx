import { FC } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"
import ExternalButtonLink from "./ExternalButtonLink"
import { ExternalLinkHref } from "../Navbar/types"

export type ButtonType =
  | "EXTERNAL_SOLID"
  | "INTERNAL_SOLID"
  | "EXTERNAL_OUTLINE"
  | "INTERNAL_OUTLINE"

interface Props extends ButtonProps {
  cmsVariant: ButtonType
  url: string
}

export const CmsButtonLink: FC<Props> = ({ cmsVariant, url, ...props }) => {
  if (cmsVariant === "EXTERNAL_SOLID") {
    return <ExternalButtonLink href={url as ExternalLinkHref} {...props} />
  }
  if (cmsVariant === "INTERNAL_SOLID") {
    return <ChakraButton as={GatsbyLink} to={url} {...props} />
  }
  if (cmsVariant === "EXTERNAL_OUTLINE") {
    return (
      <ExternalButtonLink
        variant="outline"
        href={url as ExternalLinkHref}
        {...props}
      />
    )
  }
  if (cmsVariant === "INTERNAL_OUTLINE") {
    return (
      <ChakraButton variant="outline" as={GatsbyLink} to={url} {...props} />
    )
  }

  return <ChakraButton {...props} />
}
