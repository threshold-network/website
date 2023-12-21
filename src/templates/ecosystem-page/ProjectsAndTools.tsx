import { FC, useEffect, useState } from "react"
import { SimpleGrid, Stack, Flex } from "@chakra-ui/react"
import { CardButton, CardCategory, ImageProps } from "../../components"
import SortDropdown, { SortOption } from "../../components/SortDropdown"
import FilterMenu from "../../components/FilterMenu"
import { ProjectsAndToolsCard } from "./ProjectsAndToolsCard"
import Pagination from "../../components/Pagination"
import { convertDateToTimestamp } from "../../utils/date"

const ITEMS_PER_PAGE = 6

export enum Category {
  ALL = "all",
  PROJECT = "project",
  TOOL = "tool",
  INFRASTRUCTURE = "infrastructure",
  INTEGRATION = "integration",
}

export interface ProjectsAndToolsCardProps {
  image: ImageProps
  title: string
  description: string
  categories: CardCategory[]
  date: string
  buttons: CardButton[]
}

const ProjectsAndTools: FC<{ cards: ProjectsAndToolsCardProps[] }> = ({
  cards,
}) => {
  const [totalNumberOfCards, setTotalNumberOfCards] = useState<number>(0)
  const [paginatedCards, setPaginatedCards] = useState<
    ProjectsAndToolsCardProps[]
  >([])
  const [activeCategory, setActiveCategory] = useState<string | null>(
    Category.ALL
  )
  const [sortOption, setSortOption] = useState<SortOption>()

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalNumberOfCards / ITEMS_PER_PAGE)

  const filterAndSortCards = () => {
    const tempCards =
      activeCategory === Category.ALL
        ? cards
        : cards.filter((card) =>
            card.categories.some(
              (category) => category.label === activeCategory
            )
          )

    // Sorting logic
    return tempCards.sort((a, b) => {
      const aDate = convertDateToTimestamp(a.date)
      const bDate = convertDateToTimestamp(b.date)

      switch (sortOption) {
        case SortOption.TITLE_ASC:
          return a.title.localeCompare(b.title)
        case SortOption.TITLE_DESC:
          return b.title.localeCompare(a.title)
        case SortOption.TIMESTAMP_ASC:
          return aDate - bDate
        case SortOption.TIMESTAMP_DESC:
          return bDate - aDate
        default:
          return 0
      }
    })
  }

  useEffect(() => {
    const sortedAndFilteredCards = filterAndSortCards()

    setTotalNumberOfCards(sortedAndFilteredCards.length)
    setPaginatedCards(
      sortedAndFilteredCards.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    )
  }, [activeCategory, sortOption, cards, currentPage])

  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "start", md: "space-between" }}
        spacing={4}
        mt={12}
      >
        <FilterMenu
          options={Object.values(Category) as string[]}
          activeFilter={activeCategory}
          setActiveFilter={setActiveCategory}
          setCurrentPage={setCurrentPage}
        />
        <SortDropdown
          sortOption={sortOption || "Sort"}
          setSortOption={setSortOption}
          setCurrentPage={setCurrentPage}
        />
      </Stack>
      <SimpleGrid columns={{ md: 3 }} spacing={3} mt={8}>
        {paginatedCards.map((card: any, i) => (
          <ProjectsAndToolsCard key={i} {...card} />
        ))}
      </SimpleGrid>
      <Flex my={10} justifyContent="center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Flex>
    </>
  )
}

export default ProjectsAndTools
