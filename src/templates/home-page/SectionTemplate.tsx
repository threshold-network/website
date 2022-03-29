import React, { FC } from "react"
import { BoxProps, Stack } from "@chakra-ui/react"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"
import { H2, H5, LabelMd } from "../../components/Typography"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../../components/PageSection"
import { ImageProps } from "../../components"

export interface FooterButton {
  label: string
  url: string
  variant: string
}

export interface RoleTemplateProps extends BoxProps {
  bgColor: string
  title: string
  description: string
  buttons: FooterButton[]
  image: ImageProps
  rowReverse?: boolean
}

const SectionTemplate: FC<RoleTemplateProps> = ({
  title,
  description,
  buttons = [],
  image,
  rowReverse,
  ...boxProps
}) => {
  return (
    <PageSection {...boxProps}>
      <ResponsiveStack rowReverse={rowReverse} spacing={16}>
        <SectionTextContainer>
          <LabelMd textTransform="uppercase" color="gray.500">
            Get Started
          </LabelMd>
          <H2 mt={3}>{title}</H2>
          <H5 mt={10} color="gray.300">
            {description}
          </H5>
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
        <SectionImage {...image} />
      </ResponsiveStack>
    </PageSection>
  )
}

export default SectionTemplate
