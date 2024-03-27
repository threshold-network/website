import { FC } from "react"
import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { H3, ImageProps } from "../../../components"
import { SectionImage } from "../../../components/PageSection"

export interface TacoFeaturesProps {
  sections: FeatureSection[]
}

export type FeaturesSectionProps = FeatureSection

export interface FeaturesCardProps {
  icon: ImageProps
  title: string
  description: string
  index: number
}

export interface FeatureCard {
  title: string
  description: string
  icon: Icon
}

export interface FeatureSection {
  title: string
  cards: FeatureCard[]
}

export interface Icon {
  id: string
  relativePath: string
}

const FeaturesCard: FC<FeaturesCardProps> = ({
  icon,
  title,
  description,
  index,
}) => (
  <Card
    display="flex"
    alignItems="start"
    flexDirection="column"
    borderColor="gray.800"
    borderLeft={index > 0 ? { md: "transparent" } : "gray.800"}
    gap={6}
    roundedLeft={index === 0 ? { base: "none", lg: 12 } : "none"}
    roundedRight={index === 2 ? { base: "none", lg: 12 } : "none"}
    py="2.5rem"
    bg="transparent"
  >
    <Box mr="auto">
      <SectionImage h="60px" w="60px" imageProps={icon} />
    </Box>
    <Card.Title fontWeight="medium">{title}</Card.Title>
    <Card.Body as="div" color="gray.300" lineHeight="26px" fontSize="1rem">
      {description}
    </Card.Body>
  </Card>
)

const FeaturesSection: FC<FeaturesSectionProps> = ({ title, cards }) => {
  return (
    <Box>
      <H3 fontWeight="medium">{title}</H3>
      <SimpleGrid columns={{ md: 3 }} mt={12}>
        {cards.map((card: any, i) => (
          <FeaturesCard key={i} index={i} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

const TacoFeatures: FC<TacoFeaturesProps> = ({ sections }) => {
  return (
    <Stack mt={16} direction="column" gap="5rem">
      {sections.map((section: any, i) => (
        <FeaturesSection key={i} {...section} />
      ))}
    </Stack>
  )
}

export default TacoFeatures
