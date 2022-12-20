import React, { FC } from "react"
import Youtube from "react-youtube"
import {
  PageSection,
  ResponsiveStack,
  SectionTextContainer,
} from "../../../components/PageSection"
import { BodyLg, H5 } from "../../../components"
import { BoxProps, Stack } from "@chakra-ui/react"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import { FooterButton } from "../SectionTemplate"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"

export interface WhatIsThresholdProps extends BoxProps {
  bgColor: string
  title: string
  description: string
  youtubeID: string
  buttons: FooterButton[]
}

const WhatIsThreshold: FC<WhatIsThresholdProps> = ({
  title,
  description,
  youtubeID,
  buttons,
  ...props
}) => {
  const isMobile = useChakraBreakpoint("md")
  const youtubeStyles = isMobile
    ? {
        margin: "20px auto",
      }
    : {}

  return (
    <PageSection {...props}>
      <ResponsiveStack columnReverse spacing={16}>
        <SectionTextContainer>
          <H5>{title}</H5>
          <BodyLg mt={10} color="gray.300">
            {description}
          </BodyLg>
          <Stack mt={10} direction={{ base: "column", md: "row" }} spacing={8}>
            {buttons.map((_: FooterButton, i) => (
              <CmsButtonLink
                key={_.label}
                cmsVariant={_.variant as ButtonType}
                url={_.url}
              >
                {_.label}
              </CmsButtonLink>
            ))}
          </Stack>
        </SectionTextContainer>
        <Youtube
          videoId={youtubeID}
          style={youtubeStyles}
          opts={{
            width: 420,
            height: 240,
          }}
        />
      </ResponsiveStack>
    </PageSection>
  )
}

export default WhatIsThreshold
