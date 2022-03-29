import React, { FC } from "react"
import { Stack, StackDivider } from "@chakra-ui/react"
import {
  PageSection,
  ResponsiveStack,
  SectionTextContainer,
} from "../../../components/PageSection"
import { BodyLg, H3 } from "../../../components/Typography"
import ImageStack from "./ImageStack"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import { ImageProps } from "../../../components"
import { FooterButton } from "../SectionTemplate"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"

interface ButtonInfo {
  label: string
  url: string
  variant: string
}

interface SubItem {
  description: string
  image: ImageProps
  title: string
}

interface HarnessThePowerProps {
  buttons: ButtonInfo[]
  description: string
  subitems: SubItem[]
  title: string
}

const HarnessThePower: FC<HarnessThePowerProps> = ({
  title,
  description,
  subitems,
  buttons,
}) => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <PageSection bg="gray.800">
      <SectionTextContainer>
        <Stack spacing={6}>
          <H3 color="white">{title}</H3>
          <BodyLg color="gray.300">{description}</BodyLg>
          {buttons.map((_: FooterButton) => (
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
      <ResponsiveStack
        spacing="32px !important"
        mt={16}
        divider={isMobile ? <StackDivider bg="gray.700" /> : undefined}
      >
        {subitems.map((_: SubItem) => (
          <ImageStack
            key={_.title}
            title={_.title}
            description={_.description}
            image={_.image}
          />
        ))}
      </ResponsiveStack>
    </PageSection>
  )
}

export default HarnessThePower
