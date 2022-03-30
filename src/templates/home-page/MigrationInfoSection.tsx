import React, { FC } from "react"
import { Stack } from "@chakra-ui/react"
import { BodyLg, H5 } from "../../components/Typography"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../../components/PageSection"
import keepNuIllustration from "../../static/images/Keep-Nu-illustration.png"
import SectionTemplate, {
  FooterButton,
  RoleTemplateProps,
} from "./SectionTemplate"
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
}) => {
  return (
    <PageSection bg={bgColor}>
      <ResponsiveStack spacing={16} rowReverse={rowReverse}>
        <SectionTextContainer>
          <Stack spacing={6}>
            <H5 color="white">{title}</H5>
            <BodyLg color="gray.300">{description}</BodyLg>
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

export default MigrationInfoSection
