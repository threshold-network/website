import React, { FC } from "react"
import { Box, HStack, Stack } from "@chakra-ui/react"
import { BodyLg, H5, LabelMd } from "../../components/Typography"
import { PageSection } from "../../components/PageSection"

import { FooterButton, RoleTemplateProps } from "./SectionTemplate"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"
import { Image } from "../../components"

const MigrationInfoSection: FC<RoleTemplateProps> = ({
  bgColor,
  title,
  description,
  buttons,
  image,
  preTitle,
}) => {
  return (
    <PageSection bg={bgColor}>
      <Box
        display="flex"
        flexDirection={{
          base: "column-reverse",
          md: "row",
        }}
        justifyContent="space-between"
      >
        <Stack
          margin={{ base: "48px 0 0 0", md: "auto 0 !important" }}
          maxW={{ base: "100%", md: "512px" }}
          spacing={0}
        >
          <LabelMd textTransform="uppercase" color="gray.500">
            {preTitle}
          </LabelMd>
          <Stack spacing={6}>
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
        </Stack>
        <Image
          px={8}
          w={{ base: "380px", lg: "415px" }}
          m={{ base: "auto !important", md: "0 !important" }}
          {...image}
        />
      </Box>
    </PageSection>
  )
}

export default MigrationInfoSection
