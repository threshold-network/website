import { FC } from "react"
import { LinkInfo } from "../types"
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
import { Link as GatsbyLink } from "gatsby"
import { FiArrowUpRight } from "react-icons/all"

const hoverStyles = {
  textDecoration: "none",
  color: "white",
  borderBottom: "1px solid white",
}

const DropdownMenu: FC<{ dropdown: LinkInfo[]; text: string }> = ({
  dropdown,
  text,
}) => {
  return (
    <Menu>
      {({ isOpen }) => {
        const openStyles = isOpen ? hoverStyles : {}

        return (
          <>
            <MenuButton
              px={2}
              color="gray.300"
              _hover={hoverStyles}
              {...openStyles}
            >
              <HStack>
                <LabelMd lineHeight="90px" textTransform="uppercase">
                  {text}
                </LabelMd>
                <ChevronDownIcon color="gray.300" />
              </HStack>
            </MenuButton>
            <MenuList bg="gray.900" borderColor="gray.700">
              {dropdown.map((link) => {
                return (
                  <MenuItem
                    key={link.label}
                    color="gray.300"
                    _hover={{ bg: "gray.900", color: "white" }}
                    _focus={{
                      bg: "gray.900",
                    }}
                    as={link.isExternal ? Link : GatsbyLink}
                    // @ts-ignore
                    href={link.url}
                    to={link.url}
                    target={link.isExternal ? "_blank" : undefined}
                  >
                    <BodyMd>{link.label}</BodyMd>
                    {link.isExternal && <Icon ml={2} as={FiArrowUpRight} />}
                  </MenuItem>
                )
              })}
            </MenuList>
          </>
        )
      }}
    </Menu>
  )
}

export default DropdownMenu
