import React, { FC } from "react"
import { ExternalLinkHref, LinkInfo } from "../types"
import {
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { BodyMd, LabelMd } from "../../Typography"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/all"

const DropdownMenu: FC<{ dropdown: LinkInfo[]; text: string }> = ({
  dropdown,
  text,
}) => {
  return (
    <Menu>
      <MenuButton
        px={2}
        color="gray.300"
        _hover={{
          textDecoration: "none",
          color: "white",
          borderBottom: "1px solid white",
        }}
      >
        <HStack>
          <LabelMd lineHeight="90px" textTransform="uppercase">
            {text}
          </LabelMd>
          <ChevronDownIcon color="gray.300" />
        </HStack>
      </MenuButton>
      <MenuList bg="gray.900" border="none">
        {dropdown.map((link) => {
          return (
            <MenuItem
              key={link.text}
              color="gray.300"
              _hover={{ bg: "gray.900", color: "white" }}
              _focus={{
                bg: "gray.900",
              }}
              as={link.isExternal ? Link : RouterLink}
              href={link.href}
              to={link.href}
              target={link.isExternal ? "_blank" : undefined}
            >
              <BodyMd>{link.text}</BodyMd>
              {link.isExternal && <Icon ml={2} as={FiArrowUpRight} />}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default DropdownMenu
