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
import { TrackComponent } from "../../components/Posthog/TrackComponent"

type OmittedBoxProps = Omit<BoxProps, "title">

export interface FooterButton {
  label: string
  url: string
  variant: string
  posthogLabel?: string
}

export interface RoleTemplateProps extends OmittedBoxProps {
  bgColor: string
  title: string | JSX.Element | FC
  description: string
  buttons: FooterButton[]
  image?: ImageProps
  rowReverse?: boolean
  size?: "sm" | "md"
  isImageBackground?: boolean
  isCentered?: boolean
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
  size,
  isImageBackground,
  isCentered,
  preTitle = "Get Started",
  children,
  ...boxProps
}) => {
  return (
    <PageSection
      withSmallPadding={size === "sm"}
      withMediumPadding={size === "md"}
      {...boxProps}
    >
      <ResponsiveStack
        rowReverse={rowReverse}
        columnReverse={columnReverse}
        spacing={16}
        justifyContent={isCentered ? "center" : "space-between"}
        textAlign={isCentered ? "center" : undefined}
      >
        <SectionTextContainer>
          <LabelMd textTransform="uppercase" color="gray.500">
            {preTitle}
          </LabelMd>
          <H2 mt={3} color="gray.50">
            {title}
          </H2>
          {size === "sm" ? (
            <BodyLg mt={10} color="gray.300">
              {description}
            </BodyLg>
          ) : (
            <H5 mt={10} color="gray.300">
              {description}
            </H5>
          )}
          <Stack
            mt={10}
            direction={{ base: "column", md: "row" }}
            justifyContent={isCentered ? "center" : "start"}
            spacing={8}
          >
            {buttons.map((_: FooterButton, i) => {
              return (
                <TrackComponent posthogLabel={_.posthogLabel} key={_.label}>
                  <CmsButtonLink
                    cmsVariant={_.variant as ButtonType}
                    url={_.url}
                  >
                    {_.label}
                  </CmsButtonLink>
                </TrackComponent>
              )
            })}
          </Stack>
        </SectionTextContainer>
        {image && (
          <SectionImage
            imageProps={image}
            isImageBackground={isImageBackground}
          />
        )}
      </ResponsiveStack>
      {children}
    </PageSection>
  )
}

export default SectionTemplate
