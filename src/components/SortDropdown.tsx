import { Dispatch, SetStateAction } from "react"
import { HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BodyMd, LabelMd } from "./Typography"
import { ChevronDownIcon } from "@chakra-ui/icons"

export enum SortOption {
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
  sortOption: SortOption | "Sort"
  setSortOption: Dispatch<SetStateAction<SortOption | undefined>>
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
              px={4}
              mt={{ base: 8, md: 0 }}
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
              {Object.values(SortOption).map((option, index) => {
                return (
                  <MenuItem
                    key={index}
                    color="gray.300"
                    onClick={() => {
                      setCurrentPage(1)
                      setSortOption(option as SortOption)
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
