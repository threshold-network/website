import React, { FC } from "react"
import { HStack, Stack } from "@chakra-ui/react"
import { BodyLg, H5 } from "../../components/Typography"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../../components/PageSection"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"
import { FooterButton, RoleTemplateProps } from "../home-page/SectionTemplate"

const MigrationInfoSection: FC<RoleTemplateProps> = ({
  title,
  description,
  buttons,
  image,
  rowReverse,
}) => {
  return (
    <PageSection bg="gray.900">
      <ResponsiveStack spacing={16} rowReverse={rowReverse}>
        <SectionTextContainer>
          <Stack
            spacing={6}
            maxW="430px"
            margin="auto"
            h="100%"
            justifyContent="center"
          >
            <H5 color="white">{title}</H5>
            <BodyLg color="gray.300">{description}</BodyLg>
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
