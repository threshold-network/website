import { FC, useEffect, useState, useRef } from "react"
import { Image, ImageProps } from "./Image"
import Card from "./Card"
import { LabelSm } from "./Typography"
import { Box, Stack } from "@chakra-ui/react"

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
  const [cardSet, setCardSet] = useState<IntegrationCardProps[]>([])
  const scrollContainer = useRef<HTMLDivElement>(null)

  const cardWidth = 170
  const cardSpacing = 6

  useEffect(() => {
    const numberOfCards = window.innerWidth / (cardWidth + cardSpacing)
    const roundedNumberOfCards = Math.floor(numberOfCards)
    let newCardSet: IntegrationCardProps[] = []

    // Create a new array by duplicating the original cards until we reach the
    // calculated size
    for (let i = 0; i < roundedNumberOfCards; i++) {
      newCardSet = [...newCardSet, ...cards]
    }
    setCardSet(newCardSet)
  }, [cardWidth, cardSpacing, cards])

  useEffect(() => {
    let animationFrame: number

    const scrollCards = () => {
      if (scrollContainer.current) {
        const scrollElem = scrollContainer.current
        scrollElem.scrollLeft += 1.5

        // Reset to the start when reaching the end
        if (
          scrollElem.scrollLeft >=
          scrollElem.scrollWidth - scrollElem.offsetWidth
        ) {
          scrollElem.scrollLeft = 0
        }
      }
      animationFrame = requestAnimationFrame(scrollCards)
    }
    animationFrame = requestAnimationFrame(scrollCards)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [cardSet])

  return (
    <Stack
      ref={scrollContainer}
      id="card-container"
      backgroundColor="gray.900"
      direction="row"
      spacing={cardSpacing}
      overflowX="hidden"
      py={20}
      my={-20}
    >
      {cardSet.map((card: IntegrationCardProps, i) => (
        <IntegrationCard key={i} {...card} />
      ))}
    </Stack>
  )
}

export default IntegrationCard
