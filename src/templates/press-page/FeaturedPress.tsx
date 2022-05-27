import { FC } from "react"
import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { Image, ImageProps } from "../../components"

export interface PressArticle {
  image: ImageProps
  title: string
  subTitle: string
  description: string
  url: string
}

const PressCard: FC<PressArticle> = ({
  title,
  subTitle,
  description,
  url,
  image,
}) => {
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
        <Image {...image} />
      </Box>
      <Box p={6}>
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Card.Title>{title}</Card.Title>
            <Card.SubTitle>{subTitle}</Card.SubTitle>
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
    {pressArticles.map((article: any, i) => (
      <PressCard key={i} {...article} />
    ))}
  </SimpleGrid>
)

export default FeaturedPress
