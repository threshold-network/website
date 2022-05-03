import React, { FC } from "react"
import { HStack, Stack } from "@chakra-ui/react"
import { BodyLg, H5, LabelMd } from "../../components/Typography"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../../components/PageSection"

import { FooterButton, RoleTemplateProps } from "./SectionTemplate"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"

const MigrationInfoSection: FC<RoleTemplateProps> = ({
  bgColor,
  title,
  description,
  buttons,
  image,
  rowReverse,
  preTitle,
}) => {
  return (
    <PageSection bg={bgColor}>
      <ResponsiveStack spacing={16} rowReverse={rowReverse}>
        <SectionTextContainer>
          <LabelMd textTransform="uppercase" color="gray.500">
            {preTitle}
          </LabelMd>
          <Stack spacing={6} justifyContent="center" display="flex" h="100%">
            <H5 color="white">{title}</H5>
            <BodyLg color="gray.300" maxW="400px">
              {description}
            </BodyLg>
            <HStack>
              {buttons.map((_: FooterButton, i) => (
                <CmsButtonLink
                  key={_.label}
                  cmsVariant={_.variant as ButtonType}
                  url={_.url}
                >
                  {_.label}
                </CmsButtonLink>
              ))}
            </HStack>
          </Stack>
        </SectionTextContainer>
        <SectionImage {...image} />
      </ResponsiveStack>
    </PageSection>
  )
}

export default MigrationInfoSection
