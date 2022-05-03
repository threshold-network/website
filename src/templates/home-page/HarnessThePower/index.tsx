import React, { FC } from "react"
import { Stack, StackDivider } from "@chakra-ui/react"
import {
  PageSection,
  ResponsiveStack,
  SectionTextContainer,
} from "../../../components/PageSection"
import ImageStack from "./ImageStack"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import { BodyLg, H3, ImageProps } from "../../../components"
import { FooterButton } from "../SectionTemplate"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"

interface SubItem {
  description: string
  image: ImageProps
  title: string
}

interface ButtonInfo {
  label: string
  url: string
  variant: string
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
    <PageSection bgColor="gray.800">
      <ResponsiveStack spacing={16}>
        <SectionTextContainer>
          <H3 color="gray.50">{title}</H3>
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
      </ResponsiveStack>
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
