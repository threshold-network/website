import { FC } from "react"
import { Stack, Text, Box } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

interface PaginationProps {
  totalPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToLastPage = () => {
    setCurrentPage(totalPages)
  }
  return (
    <Stack direction="row" spacing={4} align="center">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Text
          key={page}
          color={currentPage === page ? "white" : "gray.500"}
          borderBottom={currentPage === page ? "1px solid white" : "none"}
          cursor="pointer"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Text>
      ))}
      <Box
        h={2}
        w={3}
        display="flex"
        alignItems="center"
        as="button"
        onClick={goToNextPage}
      >
        <ChevronRightIcon />
      </Box>
      <Box
        h={2}
        w={3}
        display="flex"
        alignItems="center"
        borderRight="1px solid"
        as="button"
        onClick={goToLastPage}
      >
        <ChevronRightIcon />
      </Box>
    </Stack>
  )
}

export default Pagination
