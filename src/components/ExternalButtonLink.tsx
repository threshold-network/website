import { Button, ButtonProps } from "@chakra-ui/react"
import { ExternalLinkHref } from "./Navbar/types"
import { FC } from "react"
import { FiArrowUpRight } from "react-icons/all"

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
      rightIcon={<FiArrowUpRight />}
      {...props}
    />
  )
}

export default ExternalButtonLink
