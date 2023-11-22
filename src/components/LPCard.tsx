import { FC } from "react"
import { Image, ImageProps } from "./Image"
import Card from "./Card"
import { H5, LabelMd } from "./Typography"
import ExternalButtonLink from "./Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "./Navbar/types"
import { Box, SimpleGrid, Stack, useMediaQuery } from "@chakra-ui/react"
import useChakraBreakpoint from "../hooks/useChakraBreakpoint"

interface LPCardProps {
  image1: ImageProps
  title: string
  subTitle: string
  buttonText: string
  buttonUrl: string
}

const LPCard: FC<LPCardProps> = ({
  image1,
  title,
  subTitle,
  buttonUrl,
  buttonText,
  ...props
}) => {
  return (
    <Card minW="320px" {...props}>
      <Stack direction="row">
        <Box position="relative" w="48px" h="48px" mr={2}>
          <Image
            left={0}
            top={0}
            position="absolute"
            boxSize="32px"
            h="32px"
            w="32px"
            {...image1}
          />
        </Box>
        <Stack spacing={0}>
          <H5 color="gray.100">{title}</H5>
          <LabelMd textTransform="uppercase" color="gray.500">
            {subTitle}
          </LabelMd>
        </Stack>
      </Stack>
      <ExternalButtonLink
        size="lg"
        width="100%"
        href={buttonUrl as ExternalLinkHref}
        mt={8}
      >
        {buttonText}
      </ExternalButtonLink>
    </Card>
  )
}

export const LPCardGroup: FC<{ cards: LPCardProps[] }> = ({ cards }) => {
  const [isLargerThan1120] = useMediaQuery("(min-width: 1120px)")
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const isInBetweenSizes = isLargerThan768 && !isLargerThan1120
  const columns = isLargerThan1120 ? 3 : isInBetweenSizes ? 2 : 1

  return (
    <SimpleGrid columns={columns} spacing={6} mt={6}>
      {cards.map((card: any, i) => (
        <LPCard key={i} {...card} />
      ))}
    </SimpleGrid>
  )
}

export default LPCard
