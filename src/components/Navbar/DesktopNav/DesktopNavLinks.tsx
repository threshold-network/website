import React, { FC } from "react"
import { HStack } from "@chakra-ui/react"
import DropdownLabelLink from "./DropdownMenu"
import NavLink from "./NavLink"
import { LinkInfo } from "../types"

const DesktopNavLinks: FC<{ navLinks: LinkInfo[] }> = ({ navLinks }) => {
  return (
    <HStack
      w="100%"
      borderRight="1px solid"
      borderLeft="1px solid"
      borderColor="gray.700"
      px={8}
      spacing={4}
      display={{ base: "none", lg: "inherit" }}
      as="nav"
    >
      {navLinks.map(({ dropdown, text, href }) => {
        if (dropdown) {
          return (
            <DropdownLabelLink key={text} text={text} dropdown={dropdown} />
          )
        }

        return (
          <NavLink key={text} href={href!}>
            {text}
          </NavLink>
        )
      })}
    </HStack>
  )
}

export default DesktopNavLinks
