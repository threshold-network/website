import React, { FC } from "react"
import { HStack } from "@chakra-ui/react"
import DropdownLabelLink from "./DropdownMenu"
import NavLink from "./NavLink"
import { LinkInfo } from "../types"
import NavCTAButtons from "../NavCTAButtons"
import { CardButton } from "../../Card"

interface DesktopNavLinksProps {
  navLinks: LinkInfo[]
  menuButtons: CardButton[]
}

const DesktopNavLinks: FC<DesktopNavLinksProps> = ({
  navLinks,
  menuButtons,
}) => {
  return (
    <HStack
      w={{ base: "100%", xl: "auto" }}
      borderRight="1px solid"
      borderLeft="1px solid"
      borderColor="gray.700"
      px={8}
      spacing={4}
      display={{ base: "none", md: "inherit" }}
      justifyContent={{ base: "end", xl: "start" }}
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
      <NavCTAButtons menuButtons={menuButtons} px={5} />
    </HStack>
  )
}

export default DesktopNavLinks
