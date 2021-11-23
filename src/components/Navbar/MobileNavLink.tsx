import { FC } from "react"
import { Icon, Link } from "@chakra-ui/react"
import { H5 } from "../Typography"
import { FiArrowUpRight } from "react-icons/all"

const MobileNavLink: FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      color="white"
      display="flex"
      justifyContent="space-between"
      _hover={{
        textDecoration: "none",
      }}
      py={8}
    >
      <H5>{children}</H5>
      <Icon as={FiArrowUpRight} boxSize={6} mt="7px" />
    </Link>
  )
}

export default MobileNavLink
