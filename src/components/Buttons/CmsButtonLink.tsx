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
  switch (cmsVariant) {
    case "EXTERNAL_SOLID":
      return (
        <ExternalButtonLink
          size="lg"
          href={url as ExternalLinkHref}
          {...props}
        />
      )
    case "INTERNAL_SOLID":
      return <ChakraButton size="lg" as={GatsbyLink} to={url} {...props} />
    case "EXTERNAL_OUTLINE":
      return (
        <ExternalButtonLink
          h="auto"
          px={6}
          py={4}
          variant="outline"
          href={url as ExternalLinkHref}
          {...props}
        />
      )
    case "INTERNAL_OUTLINE":
      return (
        <ChakraButton
          size="lg"
          variant="outline"
          as={GatsbyLink}
          to={url}
          {...props}
        />
      )
    default:
      return <ChakraButton h="auto" px={6} py={3} {...props} />
  }
}
