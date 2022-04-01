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
import SectionTemplate, { FooterButton } from "../SectionTemplate"
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
    <SectionTemplate
      bgColor="gray.800"
      title={title}
      description={description}
      buttons={buttons}
    >
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
    </SectionTemplate>
  )
}

export default HarnessThePower
