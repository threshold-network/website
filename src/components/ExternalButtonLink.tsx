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
      rel="noopener noreferrer"
      target="_blank"
      w="fit-content"
      rightIcon={<FiArrowUpRight />}
      {...props}
      as="a"
      href={href}
    />
  )
}

export default ExternalButtonLink
