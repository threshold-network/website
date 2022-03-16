import React from "react"
import { Stack } from "@chakra-ui/react"
import { BodyLg, H5 } from "../../components/Typography"
import ExternalButtonLink from "../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../../components/PageSection"
import keepNuIllustration from "../../static/images/Keep-Nu-illustration.png"

const MigrationInfoSection = () => {
  return (
    <PageSection bg="gray.900">
      <ResponsiveStack spacing={16}>
        <SectionTextContainer>
          <Stack spacing={6}>
            <H5 color="white">Do you own KEEP or NU?</H5>
            <BodyLg color="gray.300">
              Keep and NuCypher merged to form the Threshold Network. Migrate
              your tokens to T!
            </BodyLg>
            <ExternalButtonLink variant="outline" href={ExternalLinkHref.DAPP}>
              Migrate Tokens
            </ExternalButtonLink>
          </Stack>
        </SectionTextContainer>
        <SectionImage src={keepNuIllustration} />
      </ResponsiveStack>
    </PageSection>
  )
}

export default MigrationInfoSection
