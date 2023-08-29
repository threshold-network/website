import React, { FC } from "react"
import { BoxProps, Stack, Text } from "@chakra-ui/react"
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

export interface FooterButton {
  label: string
  url: string
  variant: string
  posthogLabel?: string
}

export interface RoleTemplateProps extends BoxProps {
  bgColor: string
  title: string
  description: string
  buttons: FooterButton[]
  highlightedWord?: string
  image?: ImageProps
  rowReverse?: boolean
  isSmallSize?: boolean
  isImageBackground?: boolean
  columnReverse?: boolean
  preTitle?: string
}

const SectionTitleTemplate: FC<Partial<RoleTemplateProps>> = ({
  title,
  highlightedWord,
}) => {
  return (
    <H2 mt={3} color="brand.50">
      {title!
        .split(" ")
        .map((word, index, arr) => {
          return word === highlightedWord ? (
            <Text
              as="span"
              bgGradient="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
              bgClip="text"
              fontWeight="bold"
              key={index}
            >
              {word}
            </Text>
          ) : (
            <Text as="span" color="brand.50" key={index}>
              {word}
            </Text>
          )
        })
        .reduce((acc, curr, index, arr) => {
          return index !== arr.length - 1 ? [...acc, curr, " "] : [...acc, curr]
        }, [] as React.ReactNode[])}
    </H2>
  )
}

const SectionTemplate: FC<RoleTemplateProps> = ({
  title,
  highlightedWord,
  description,
  buttons = [],
  image,
  rowReverse,
  columnReverse,
  isSmallSize,
  isImageBackground,
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
          <SectionTitleTemplate
            title={title}
            highlightedWord={highlightedWord}
          />
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
