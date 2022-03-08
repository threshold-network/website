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
import { Body2, Label1 } from "../../Typography"
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
          <Label1 lineHeight="90px" textTransform="uppercase">
            {text}
          </Label1>
          <ChevronDownIcon color="gray.300" />
        </HStack>
      </MenuButton>
      <MenuList bg="gray.900" border="none">
        {dropdown.map((opt) => {
          const isExternal = Object.values<string>(ExternalLinkHref).includes(
            opt.href!
          )
          return (
            <MenuItem
              key={opt.text}
              color="gray.300"
              _hover={{ bg: "gray.900", color: "white" }}
              _focus={{
                bg: "gray.900",
              }}
              as={isExternal ? Link : RouterLink}
              href={opt.href}
              to={opt.href}
              target={isExternal ? "_blank" : undefined}
            >
              <Body2>{opt.text}</Body2>
              {isExternal && <Icon ml={2} as={FiArrowUpRight} />}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default DropdownMenu
