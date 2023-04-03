import React, { FC } from "react"
import { BoxProps, Stack } from "@chakra-ui/react"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"
import { BodyLg, H2, H5, LabelMd } from "../../components/Typography"
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
  image?: ImageProps
  rowReverse?: boolean
  isSmallSize?: boolean
  columnReverse?: boolean
  preTitle?: string
}

const SectionTemplate: FC<RoleTemplateProps> = ({
  title,
  description,
  buttons = [],
  image,
  rowReverse,
  columnReverse,
  isSmallSize,
  preTitle = "Get Started",
  children,
  ...boxProps
}) => {
  return (
    <PageSection withSmallPadding={isSmallSize} {...boxProps}>
      <ResponsiveStack
        rowReverse={rowReverse}
        columnReverse={columnReverse}
        spacing={16}
      >
        <SectionTextContainer>
          <LabelMd textTransform="uppercase" color="gray.500">
            {preTitle}
          </LabelMd>
          <H2 mt={3} color="gray.50">
            {title}
          </H2>
          {isSmallSize ? (
            <BodyLg mt={10} color="gray.300">
              {description}
            </BodyLg>
          ) : (
            <H5 mt={10} color="gray.300">
              {description}
            </H5>
          )}

          <Stack mt={10} direction={{ base: "column", md: "row" }} spacing={8}>
            {buttons.map((_: FooterButton, i) => (
              <CmsButtonLink
                key={_.label}
                cmsVariant={_.variant as ButtonType}
                url={_.url}
                data-ph-capture-attribute-button-name={`${_.label} (${window.location.href})`}
              >
                {_.label}
              </CmsButtonLink>
            ))}
          </Stack>
        </SectionTextContainer>
        {image && <SectionImage {...image} />}
      </ResponsiveStack>
      {children}
    </PageSection>
  )
}

export default SectionTemplate
