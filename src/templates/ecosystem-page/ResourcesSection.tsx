import { FC } from "react"
import { Flex, GridItem, SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { BodyLg, H3, H5, Image, ImageProps } from "../../components"
import { CardButton } from "./ProjectsAndToolsCard"
import backgroundResources from "../../static/images/background-resources.svg"

export interface ResourcesCardProps {
  image: ImageProps
  title: string
  description: string
  buttons: CardButton[]
  isBigSize?: boolean
}

const ResourcesCard: FC<ResourcesCardProps> = ({
  image,
  title,
  description,
  buttons,
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
        <Stack direction="row" alignItems="center" gap={4}>
          <Image h="42px" w="42px" {...image} />
          <H5 noOfLines={2}>{title}</H5>
        </Stack>

        <BodyLg as="div" color="gray.400" noOfLines={2}>
          {description}
        </BodyLg>
        {buttons.map((button: CardButton, i) => (
          <ExternalButtonLink
            key={i}
            mt={6}
            href={button.url as ExternalLinkHref}
            size="lg"
            variant="outline"
          >
            {button.label}
          </ExternalButtonLink>
        ))}
      </Stack>
    </Card>
  )
}

const ResourcesExtendedCard: FC<ResourcesCardProps> = ({
  image,
  title,
  description,
  buttons,
}) => {
  return (
    <GridItem
      boxShadow={"0px 4px 90px 0px rgba(153, 116, 255, 0.06)"}
      m="auto"
      display="flex"
      flexDirection="column"
      w="100%"
      colSpan={{ base: 1, md: 2 }}
    >
      <Card p={0} m={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Flex
            flexDirection="row"
            alignItems="center"
            gap={6}
            px={{ base: 8, md: 20 }}
            py={20}
            backgroundImage={backgroundResources}
          >
            <Image h="132px" w="132px" {...image} />
            <H3 fontWeight="semibold" noOfLines={2}>
              Threshold Blog
            </H3>
          </Flex>
          <Stack spacing={7} pl={16} pr={20} py={10}>
            <H5 noOfLines={2}>{title}</H5>
            <BodyLg as="div" color="gray.400" noOfLines={3}>
              {description}
            </BodyLg>
            {buttons.map((button: CardButton, i) => (
              <ExternalButtonLink
                key={i}
                mt={6}
                href={button.url as ExternalLinkHref}
                size="lg"
                variant="outline"
              >
                {button.label}
              </ExternalButtonLink>
            ))}
          </Stack>
        </SimpleGrid>
      </Card>
    </GridItem>
  )
}

const ResourcesSection: FC<{ cards: ResourcesCardProps[] }> = ({ cards }) => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={8}>
        {cards
          .slice(0, 3)
          .map((resource: any, i) =>
            resource.isBigSize ? (
              <ResourcesExtendedCard key={i} {...resource} />
            ) : (
              <ResourcesCard key={i} {...resource} />
            )
          )}
      </SimpleGrid>
    </>
  )
}

export default ResourcesSection
