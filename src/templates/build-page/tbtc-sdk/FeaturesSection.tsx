import { FC } from "react"
import { SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { BodyMd, H6, Image, ImageProps } from "../../../components"

export interface FeaturesSectionProps {
  cards: FeatureCardProps[]
  icon: ImageProps
}

export interface FeatureCardProps {
  title: string
  description: string
  isBigSize?: boolean
}

const FeatureCard: FC<FeatureCardProps & FeaturesSectionProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card
      boxShadow={"0px 4px 90px 0px rgba(153, 116, 255, 0.06)"}
      m="auto"
      display="flex"
      flexDirection="column"
      w="100%"
      p={10}
    >
      <Stack spacing={6}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Image h="10px" w="10px" {...icon} />
          <H6>{title}</H6>
        </Stack>

        <BodyMd as="div" lineHeight="28px" color="gray.400" noOfLines={3}>
          {description}
        </BodyMd>
      </Stack>
    </Card>
  )
}

const FeaturesSection: FC<FeaturesSectionProps> = ({
  cards,
  icon,
}: FeaturesSectionProps) => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={20}>
        {cards.map((resource: any, i) => (
          <FeatureCard key={i} icon={icon} {...resource} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default FeaturesSection
