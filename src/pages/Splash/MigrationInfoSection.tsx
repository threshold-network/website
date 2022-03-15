import React from "react"
import { Stack } from "@chakra-ui/react"
import { BodyLg, H5 } from "../../components/Typography"
import ExternalButtonLink from "../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import {
  PageSection,
  ResponsiveRow,
  SectionImage,
} from "../../components/PageSection"
import keepNuIllustration from "../../static/images/Keep-Nu-illustration.png"

const MigrationInfoSection = () => {
  return (
    <PageSection>
      <ResponsiveRow spacing={16}>
        <Stack spacing={6}>
          <H5 color="white">Do you own KEEP or NU?</H5>
          <BodyLg color="gray.300">
            Keep and NuCypher merged to form the Threshold Network. Migrate your
            tokens to T!
          </BodyLg>
          <ExternalButtonLink
            variant="outline"
            href={ExternalLinkHref.DAPP}
            w="auto"
          >
            Migrate Tokens
          </ExternalButtonLink>
        </Stack>
        <SectionImage src={keepNuIllustration} />
      </ResponsiveRow>
    </PageSection>
  )
}

export default MigrationInfoSection
