import { FC } from "react"
import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { Image, ImageProps } from "../../components"
import useFormatDate from "../../hooks/useFormatDate"

export interface PressArticle {
  image: ImageProps
  title: string
  date: Date
  subTitle: string
  description: string
  url: string
}

const PressCard: FC<PressArticle> = ({
  title,
  date,
  subTitle,
  description,
  url,
  image,
}) => {
  const formatDate = useFormatDate()

  return (
    <Card
      m="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p={0}
      h="100%"
    >
      <Box h="180px" overflow="hidden">
        <Image borderRadius="10px 10px 0 0" {...image} />
      </Box>
      <Box
        p={6}
        h="calc(100% - 180px)"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Card.Title>{title}</Card.Title>
            <Card.SubTitle>
              {formatDate(date)} {subTitle}
            </Card.SubTitle>
          </Stack>
          <Card.Divider />
          <Card.Body as="div" noOfLines={6}>
            {description}
          </Card.Body>
        </Stack>
        <ExternalButtonLink
          mt={16}
          href={url as ExternalLinkHref}
          variant="link"
        >
          Read
        </ExternalButtonLink>
      </Box>
    </Card>
  )
}

const FeaturedPress: FC<{ pressArticles: PressArticle[] }> = ({
  pressArticles,
}) => (
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
    {pressArticles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((article: any, i) => (
        <PressCard key={i} {...article} />
      ))}
  </SimpleGrid>
)

export default FeaturedPress
