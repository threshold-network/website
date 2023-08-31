import React from "react"
import { Button, Stack } from "@chakra-ui/react"

interface FilterMenuProps {
  options: string[]
  activeFilter: string | null
  setActiveFilter: React.Dispatch<React.SetStateAction<string | null>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  options,
  activeFilter,
  setActiveFilter,
  setCurrentPage,
}) => {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={{ md: 3 }}>
      {options.map((option, index) => (
        <Button
          key={index}
          color={activeFilter === option ? "white" : "gray.500"}
          onClick={() => {
            setCurrentPage(1)
            setActiveFilter(option)
          }}
          textTransform="capitalize"
          variant="ghost"
        >
          {option}
        </Button>
      ))}
    </Stack>
  )
}

export default FilterMenu
