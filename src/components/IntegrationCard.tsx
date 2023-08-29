import { FC } from "react"
import { Image, ImageProps } from "./Image"
import Card from "./Card"
import { LabelSm } from "./Typography"
import { Box, Stack, useMediaQuery } from "@chakra-ui/react"

interface IntegrationCardProps {
  image: ImageProps
  title: string
}

const IntegrationCard: FC<IntegrationCardProps> = ({
  image,
  title,
  ...props
}) => {
  return (
    <Card
      boxShadow={"0px 0px 100px 5px rgba(153, 116, 255, 0.08)"}
      minW="170px"
      borderRadius={35}
      py={3}
      px={4}
      {...props}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Image left={0} top={0} boxSize="40px" h="40px" w="40px" {...image} />
        <Box display="flex" justifyContent="center" w="100%">
          <LabelSm>{title}</LabelSm>
        </Box>
      </Stack>
    </Card>
  )
}

export const IntegrationsCardGroup: FC<{ cards: IntegrationCardProps[] }> = ({
  cards,
}) => {
  const [isLargerThan1120] = useMediaQuery("(min-width: 1120px)")
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const isInBetweenSizes = isLargerThan768 && !isLargerThan1120
  const columns = isLargerThan1120 ? 3 : isInBetweenSizes ? 2 : 1

  return (
    <Stack
      backgroundColor="gray.900"
      direction="row"
      justifyContent="center"
      spacing={6}
      w="full"
    >
      {cards.map((card: any, i) => (
        <IntegrationCard key={i} {...card} />
      ))}
    </Stack>
  )
}

export default IntegrationCard
