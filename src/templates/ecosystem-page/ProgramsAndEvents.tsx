import { FC } from "react"
import { SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { Image, ImageProps } from "../../components"

export interface ProgramsAndEventsCardProps {
  image: ImageProps
  title: string
  description: string
  url: string
}

const ProgramsAndEventsCard: FC<ProgramsAndEventsCardProps> = ({
  image,
  title,
  description,
  url,
}) => {
  return (
    <Stack spacing={3}>
      <Card
        m="0"
        p="0"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        borderBottomRadius={0}
        w="100%"
        overflow="hidden"
      >
        <Image left={0} top={0} {...image} />
      </Card>
      <Card
        m="auto"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        borderTopRadius={0}
        w="100%"
      >
        <Stack spacing={6}>
          <Card.Title noOfLines={2}>{title}</Card.Title>
          <Card.Body as="div" color="gray.400" noOfLines={3}>
            {description}
          </Card.Body>
        </Stack>
        <ExternalButtonLink
          mt={6}
          href={url as ExternalLinkHref}
          variant="link"
        >
          See More
        </ExternalButtonLink>
      </Card>
    </Stack>
  )
}

const ProgramsAndEvents: FC<{ cards: ProgramsAndEventsCardProps[] }> = ({
  cards,
}) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mt={8}>
      {cards.slice(0, 3).map((program: any, i) => (
        <ProgramsAndEventsCard key={i} {...program} />
      ))}
    </SimpleGrid>
  )
}

export default ProgramsAndEvents
