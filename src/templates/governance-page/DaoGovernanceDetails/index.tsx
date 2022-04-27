import { PageSection } from "../../../components/PageSection"
import { useState } from "react"
import { DAO } from "./types"
import DaoSelector from "./DaoSelector"
import DaoDelegation from "./DaoDelegation"
import DaoVotes from "./DaoVotes"
import ProposalsSection from "./ProposalsSection"

const DaoGovernanceDetails = ({ proposals }: any) => {
  const [selectedDao, setSelectedDao] = useState<DAO>("STAKER")

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <DaoSelector selectedDao={selectedDao} setSelectedDao={setSelectedDao} />
      <DaoDelegation selectedDao={selectedDao} />
      <DaoVotes />
      <ProposalsSection proposals={proposals} />
    </PageSection>
  )
}

export default DaoGovernanceDetails
