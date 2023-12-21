import { FC, useRef, useState } from "react"
import { Box, Button, SimpleGrid, Stack, Flex } from "@chakra-ui/react"
import Card, { CardButton, CardCategory } from "../../../components/Card"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import { Image, ImageProps } from "../../../components"

export interface UseCasesCardProps {
  image: ImageProps
  preTitle: string
  title: string
  description: string
  categories: CardCategory[]
  timestamp: number
  buttons: CardButton[]
}

const UseCasesCard: FC<UseCasesCardProps> = ({
  image,
  preTitle,
  title,
  description,
  buttons,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  return (
    <Stack spacing={6}>
      <Box
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        rounded="2xl"
        p="2px"
        _hover={{
          bgGradient:
            "linear-gradient(180deg, rgba(189,48,255,0) 0%, rgba(125,0,255,1) 100%)",
        }}
      >
        <Card
          m="auto"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
          borderColor="transparent"
          bg="gray.900"
        >
          <Stack spacing={6} mb="0.5rem">
            <Card.PreTitle
              bgGradient="linear-gradient(180deg, #BD30FF 3.32%, #7D00FF 95.02%)"
              fontWeight="bold"
            >
              {preTitle}
            </Card.PreTitle>
            <Stack direction="row" alignItems="center" gap={4}>
              <Image h="38px" w="38px" {...image} />
              <Card.Title noOfLines={2} maxWidth="130px" fontWeight="bold">
                {title}
              </Card.Title>
            </Stack>
            <Card.Body
              as="div"
              color="gray.400"
              lineHeight="24px"
              noOfLines={3}
            >
              {description}
            </Card.Body>
            <SimpleGrid columns={2}>
              {buttons.map((button: CardButton, i) => (
                <ExternalButtonLink
                  key={i}
                  href={button.url as ExternalLinkHref}
                  variant="link"
                  size="md"
                  width="100%"
                  justifyContent="left"
                >
                  {button.label}
                </ExternalButtonLink>
              ))}
            </SimpleGrid>
          </Stack>
        </Card>
      </Box>
    </Stack>
  )
}

const UseCases: FC<{ cards: UseCasesCardProps[] }> = ({ cards }) => {
  return (
    <SimpleGrid columns={{ md: 3 }} spacing={3} mt={8} mb={-12}>
      {cards.map((card: any, i) => (
        <UseCasesCard key={i} {...card} />
      ))}
    </SimpleGrid>
  )
}

export default UseCases
