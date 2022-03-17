import React from "react"
import { Link } from "react-router-dom"
import { Button, Stack, StackDivider } from "@chakra-ui/react"
import {
  PageSection,
  ResponsiveStack,
  SectionTextContainer,
} from "../../../components/PageSection"
import { BodyLg, H3 } from "../../../components/Typography"
import decentralizedGrid from "../../../static/images/decentralized-grid.png"
import secureGrid from "../../../static/images/secure-grid.png"
import privateGrid from "../../../static/images/private-grid.png"
import ImageStack from "./ImageStack"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import { InternalLinkHref } from "../../../components/Navbar/types"

const HarnessThePower = () => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <PageSection bg="gray.800">
      <SectionTextContainer>
        <Stack spacing={6}>
          <H3 color="white">Harness the power of Threshold</H3>
          <BodyLg color="gray.300">
            Threshold leverages threshold cryptography to protect digital assets
            by distributing operations across independent parties, requiring
            some threshold number of them (t-of-n) to cooperate.
          </BodyLg>
          <Button variant="solid" to={InternalLinkHref.ABOUT} as={Link}>
            About Threshold
          </Button>
        </Stack>
      </SectionTextContainer>
      <ResponsiveStack
        spacing="32px !important"
        mt={16}
        divider={isMobile ? <StackDivider bg="gray.700" /> : undefined}
      >
        <ImageStack
          title="Decentralized"
          description="Threshold utilizes a network of independent nodes to provide threshold cryptographic services without a central authority."
          imgSrc={decentralizedGrid}
        />
        <ImageStack
          title="Secure"
          description="Splitting cryptographic operations across nodes increases security and availability and reduces trust assumptions. Threshold is audited by the best firms in the space."
          imgSrc={secureGrid}
        />
        <ImageStack
          title="Private"
          description="Cryptographic protocols eradicate the trust burden forced on end-users and ensure privacy on the public blockchain."
          imgSrc={privateGrid}
        />
      </ResponsiveStack>
    </PageSection>
  )
}

export default HarnessThePower
