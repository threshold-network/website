import { FC } from "react"
import { SimpleGrid, Stack, Link, HStack } from "@chakra-ui/react"
import Card from "../../components/Card"
import { H5, Image, ImageProps } from "../../components"

export interface CommunitySectionCardProps {
  leftIcon: ImageProps
  title: string
  description: string
  url: string
  rightIcon: ImageProps
}

const CommunitySectionCard: FC<CommunitySectionCardProps> = ({
  leftIcon,
  title,
  description,
  url,
  rightIcon,
}) => {
  return (
    <HStack
      as={Link}
      href={url}
      target="_blank"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Card
        boxShadow={"0px 4px 90px 0px rgba(153, 116, 255, 0.06)"}
        m="auto"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="full"
        px={5}
        _hover={{
          bg: "blackAlpha.400",
        }}
      >
        <Stack alignItems="start" direction="row" spacing={6}>
          <Image left={0} top={0} {...leftIcon} />
          <Stack spacing={2} width="full">
            <H5 noOfLines={2}>{title}</H5>
            <Card.Body as="div" color="gray.400">
              {description}
            </Card.Body>
          </Stack>
          <Image boxSize="25px" justifySelf="end" {...rightIcon} />
        </Stack>
      </Card>
    </HStack>
  )
}

const CommunitySection: FC<{ cards: CommunitySectionCardProps[] }> = ({
  cards,
}) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={6} mb={12}>
      {cards.slice(0, 2).map((program: any, i) => (
        <CommunitySectionCard key={i} {...program} />
      ))}
    </SimpleGrid>
  )
}

export default CommunitySection
