import { FC } from "react"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { H4 } from "../../../components"
import VoteResultsCard from "./VoteResultsCard"
import useSnapshotProposals from "../../../hooks/useSnapshotProposals"

const DaoVotes: FC = () => {
  const { proposals } = useSnapshotProposals()

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H4 color="gray.300">Votes</H4>
      <ResponsiveStack spacing={12} mt={12}>
        {proposals.map((p) => (
          <VoteResultsCard key={p.title} {...p} />
        ))}
      </ResponsiveStack>
    </PageSection>
  )
}

export default DaoVotes
