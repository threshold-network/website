import { PageSection } from "../../../components/PageSection"
import { useState } from "react"
import { DAO } from "./types"
import DaoVotes from "./DaoVotes"
import ProposalsSection from "./ProposalsSection"

const DaoGovernanceDetails = ({ proposals }: any) => {
  const [selectedDao, setSelectedDao] = useState<DAO>("STAKER")

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <DaoVotes />
      <ProposalsSection proposals={proposals} />
    </PageSection>
  )
}

export default DaoGovernanceDetails
