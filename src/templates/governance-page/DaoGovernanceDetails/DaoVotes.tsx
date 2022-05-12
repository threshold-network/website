import { FC } from "react"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { H4 } from "../../../components"
import VoteResultsCard from "./VoteResultsCard"
import useSnapshotProposals from "../../../hooks/useSnapshotProposals"
import { HStack } from "@chakra-ui/react"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"

const DaoVotes: FC = () => {
  const { proposals } = useSnapshotProposals()

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <HStack justifyContent="space-between">
        <H4 color="gray.300">Votes</H4>
        <ExternalButtonLink
          variant="outline"
          size="lg"
          href={"https://snapshot.org/#/threshold.eth" as ExternalLinkHref}
        >
          See more votes
        </ExternalButtonLink>
      </HStack>
      <ResponsiveStack spacing={12} mt={12}>
        {proposals.map((p) => (
          <VoteResultsCard key={p.title} {...p} />
        ))}
      </ResponsiveStack>
    </PageSection>
  )
}

export default DaoVotes
