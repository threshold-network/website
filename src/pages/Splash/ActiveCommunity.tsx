import React from "react"
import { Link } from "react-router-dom"
import { Button, Stack } from "@chakra-ui/react"
import {
  PageSection,
  SectionImage,
  SectionTextContainer,
  ResponsiveStack,
} from "../../components/PageSection"
import { BodyLg, H3 } from "../../components/Typography"
import activeCommunityIllustration from "../../static/images/active-community-illustration.png"
import { InternalLinkHref } from "../../components/Navbar/types"

const ActiveCommunitySection = () => {
  return (
    <PageSection bg="gray.900">
      <ResponsiveStack>
        <SectionTextContainer>
          <Stack spacing={6}>
            <H3 color="white">Threshold is run by an active community</H3>
            <BodyLg color="gray.300">
              The Threshold DAO is a decentralized community of T token holders
              and their delegates who collectively vote to decide what's next
              for the network.
            </BodyLg>
            <Button variant="solid" to={InternalLinkHref.GOVERNANCE} as={Link}>
              About Governance
            </Button>
          </Stack>
        </SectionTextContainer>
        <SectionImage src={activeCommunityIllustration} />
      </ResponsiveStack>
    </PageSection>
  )
}

export default ActiveCommunitySection
