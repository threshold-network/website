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
      {navLinks.map(({ subitems, label, url }) => {
        if (subitems) {
          return (
            <DropdownLabelLink key={label} text={label} dropdown={subitems} />
          )
        }

        return (
          <NavLink key={label} href={url!}>
            {label}
          </NavLink>
        )
      })}
    </HStack>
  )
}

export default DesktopNavLinks
