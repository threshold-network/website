import { FC } from "react"
import { HStack, Icon, Link } from "@chakra-ui/react"
import { Label1 } from "../Typography"
import { FiArrowUpRight } from "react-icons/all"
import { LinkInfo } from "./types"

const NavLink: FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link
      href={href}
      color="brand.100"
      display="flex"
      _hover={{
        textDecoration: "none",
        color: "white",
        borderBottom: "1px solid white",
      }}
      height="100%"
    >
      <Label1 lineHeight="90px" textTransform="uppercase">
        {children}
      </Label1>
      <Icon as={FiArrowUpRight} boxSize="14px" mt="38px" ml={2} />
    </Link>
  )
}

const NavLinks: FC<{ navLinks: LinkInfo[] }> = ({ navLinks }) => {
  return (
    <HStack
      w="100%"
      borderRight="1px solid"
      borderLeft="1px solid"
      borderColor="brand.300"
      px={8}
      spacing={4}
      display={{ base: "none", md: "inherit" }}
    >
      {navLinks.map(({ text, href }) => (
        <NavLink key={text} href={href}>
          {text}
        </NavLink>
      ))}
    </HStack>
  )
}

export default NavLinks
