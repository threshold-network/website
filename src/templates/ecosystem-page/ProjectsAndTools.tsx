import { FC, useEffect, useState } from "react"
import { SimpleGrid, Stack, Flex } from "@chakra-ui/react"
import { ImageProps } from "../../components"
import SortDropdown, { SortOptions } from "../../components/SortDropdown"
import FilterMenu from "../../components/FilterMenu"
import { ProjectsAndToolsCard } from "./ProjectsAndToolsCard"
import Pagination from "../../components/Pagination"

const ITEMS_PER_PAGE = 6

export enum Categories {
  ALL = "all",
  PROJECT = "project",
  TOOL = "tool",
  INFRASTRUCTURE = "infrastructure",
  INTEGRATION = "integration",
}

export interface CardButton {
  label: string
  url: string
  variant: string
}

export interface CardCategory {
  label: string
}

export interface ProjectsAndToolsCardProps {
  image: ImageProps
  title: string
  description: string
  categories: CardCategory[]
  timestamp: number
  buttons: CardButton[]
}

const ProjectsAndTools: FC<{ cards: ProjectsAndToolsCardProps[] }> = ({
  cards,
}) => {
  const [allFilteredCards, setAllFilteredCards] = useState<
    ProjectsAndToolsCardProps[]
  >([])
  const [paginatedCards, setPaginatedCards] = useState<
    ProjectsAndToolsCardProps[]
  >([])
  const [activeCategory, setActiveCategory] = useState<string | null>("all")
  const [sortOption, setSortOption] = useState<SortOptions>()

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(allFilteredCards.length / ITEMS_PER_PAGE)

  const filterAndSortCards = () => {
    const tempCards =
      activeCategory === "all"
        ? cards
        : cards.filter((card) =>
            card.categories.some(
              (category) => category.label === activeCategory
            )
          )

    // Sorting logic
    return tempCards.sort((a, b) => {
      switch (sortOption) {
        case SortOptions.TITLE_ASC:
          return a.title.localeCompare(b.title)
        case SortOptions.TITLE_DESC:
          return b.title.localeCompare(a.title)
        case SortOptions.TIMESTAMP_ASC:
          return a.timestamp - b.timestamp
        case SortOptions.TIMESTAMP_DESC:
          return b.timestamp - a.timestamp
        default:
          return 0
      }
    })
  }

  useEffect(() => {
    const sortedAndFilteredCards = filterAndSortCards()
    setAllFilteredCards(sortedAndFilteredCards)

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
          options={Object.values(Categories) as string[]}
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
