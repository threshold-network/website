import { SimpleGrid } from "@chakra-ui/react"
import { PageSection } from "../../../components/PageSection"
import { H4 } from "../../../components"
import ProposalForumCard from "../../../components/ProposalForumCard"
import React, { FC } from "react"

const ProposalsSection: FC<{ proposals: any }> = ({ proposals }) => {
  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H4 color="gray.300">Proposals</H4>
      <SimpleGrid columns={{ base: 1, md: 3 }} mt={8} spacing={8}>
        {proposals.map((proposal: any) => (
          <ProposalForumCard key={proposal.id} {...proposal} />
        ))}
      </SimpleGrid>
    </PageSection>
  )
}

export default ProposalsSection
