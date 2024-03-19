import React, { FC, useState } from "react"
import { Box, Stack } from "@chakra-ui/react"
import { BodyLg, H3, LabelMd } from "../../../components/Typography"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
} from "../../../components/PageSection"
import { Image, ImageProps } from "../../../components/Image"
import { TrackComponent } from "../../../components/Posthog/TrackComponent"
import { SectionInfo } from "../../../types"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"

export interface TacoDiagramsProps {
  backgroundImage: ImageProps
  tacoDiagrams: SectionInfo[]
}

const TacoDiagrams: FC<TacoDiagramsProps> = ({
  backgroundImage,
  tacoDiagrams,
}) => {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1)
  }

  const handleNext = () => {
    if (current < tacoDiagrams.length - 1) setCurrent(current + 1)
  }

  const currentDiagram = tacoDiagrams[current]
  return (
    <PageSection withMediumPadding position="relative">
      <ResponsiveStack rowGap={12} alignItems="center">
        <Box maxW={{ base: "100%", md: "350px" }}>
          <LabelMd textTransform="uppercase" color="gray.500">
            {currentDiagram.preTitle}
          </LabelMd>
          <H3 mt={3} lineHeight="48px" fontWeight="medium" color="gray.50">
            {currentDiagram.title}
          </H3>
          <BodyLg fontSize="20px" mt={6} color="gray.300">
            {currentDiagram.description}
          </BodyLg>
          <Stack mt={8} direction={{ base: "column", md: "row" }} spacing={5}>
            {currentDiagram.buttons.map((button) => (
              <TrackComponent
                posthogLabel={button?.posthogLabel}
                key={button.label}
              >
                <ExternalButtonLink
                  href={button.url as ExternalLinkHref}
                  variant="outline"
                  size="md"
                  fontSize="14px"
                  maxW="10rem"
                  width="100%"
                  py="20px"
                >
                  {button.label}
                </ExternalButtonLink>
              </TrackComponent>
            ))}
          </Stack>
          <Stack direction="row" spacing={4} mt={8}>
            {tacoDiagrams.map((_, index) => (
              <Box
                key={index}
                w="9px"
                h="9px"
                borderRadius="full"
                bgColor="white"
                opacity={current === index ? 1 : 0.3}
              />
            ))}
          </Stack>
          <Stack mt={12} spacing={8} direction="row">
            <Box
              onClick={() => handlePrev()}
              cursor="pointer"
              opacity={current === 0 ? 0.5 : 1}
            >
              <Image relativePath="/left-arrow.svg" />
            </Box>
            <Box
              onClick={() => handleNext()}
              cursor="pointer"
              opacity={current === 2 ? 0.5 : 1}
            >
              <Image relativePath="/right-arrow.svg" />
            </Box>
          </Stack>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          maxW="840px"
          maxH="420px"
          overflowX="hidden"
        >
          {currentDiagram.image && <Image {...currentDiagram.image} />}
        </Box>
      </ResponsiveStack>
      <SectionImage imageProps={backgroundImage} isImageBackground={true} />
    </PageSection>
  )
}

export default TacoDiagrams
