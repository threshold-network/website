import { Button, ButtonProps } from "@chakra-ui/react"
import { ExternalLinkHref } from "./Navbar/types"
import { FC } from "react"

const ExternalButtonLink: FC<ButtonProps & { href: ExternalLinkHref }> = ({
  href,
  ...props
}) => {
  return (
    <Button
      as="a"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  )
}

export default ExternalButtonLink
