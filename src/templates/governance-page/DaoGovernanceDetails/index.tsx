import { PageSection } from "../../../components/PageSection"
import { useState } from "react"
import { DAO } from "./types"
import DaoSelector from "./DaoSelector"
import DaoDelegation from "./DaoDelegation"
import DaoVotes from "./DaoVotes"

const DaoGovernanceDetails = () => {
  const [selectedDao, setSelectedDao] = useState<DAO>("STAKER")

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <DaoSelector selectedDao={selectedDao} setSelectedDao={setSelectedDao} />
      <DaoDelegation selectedDao={selectedDao} />
      <DaoVotes />
    </PageSection>
  )
}

export default DaoGovernanceDetails
