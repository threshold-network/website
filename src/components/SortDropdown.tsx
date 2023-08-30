import { FC } from "react"
import { HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BodyMd, LabelMd, LabelSm } from "./Typography"
import { ChevronDownIcon } from "@chakra-ui/icons"

export enum SortOptions {
  TITLE_ASC = "Title (A-Z)",
  TITLE_DESC = "Title (Z-A)",
  TIMESTAMP_ASC = "Oldest",
  TIMESTAMP_DESC = "Newest",
}

const hoverStyles = {
  textDecoration: "none",
  color: "white",
}

interface SortDropdownProps {
  sortOption: Partial<SortOptions>
  setSortOption: React.Dispatch<React.SetStateAction<SortOptions>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  sortOption,
  setSortOption,
  setCurrentPage,
}) => {
  return (
    <Menu>
      {({ isOpen }) => {
        const openStyles = isOpen ? hoverStyles : {}

        return (
          <>
            <MenuButton
              px={2}
              color="gray.500"
              _hover={hoverStyles}
              {...openStyles}
            >
              <HStack>
                <LabelMd letterSpacing="0.030em" textTransform="capitalize">
                  {sortOption}
                </LabelMd>
                <ChevronDownIcon color="gray.300" />
              </HStack>
            </MenuButton>
            <MenuList bg="gray.900" borderColor="gray.700">
              {Object.values(SortOptions).map((option, index) => {
                return (
                  <MenuItem
                    key={index}
                    color="gray.300"
                    onClick={() => {
                      setCurrentPage(1)
                      setSortOption(option as SortOptions)
                    }}
                    _hover={{ bg: "gray.900", color: "white" }}
                    _focus={{
                      bg: "gray.900",
                    }}
                  >
                    <BodyMd>{option}</BodyMd>
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

export default SortDropdown
