import { FC } from "react"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { H4 } from "../../../components"
import VoteResultsCard from "./VoteResultsCard"

const DaoVotes: FC = () => {
  const completedProposals = [
    {
      title:
        "Threshold Network’s participation in Binance Learn & Earn 2.0 campaign Threshold Network’s participation in Binance Learn & Earn 2.0 campaign Threshold Network’s participation in Binance Learn & Earn 2.0 campaign Threshold Network’s participation in Binance Learn & Earn 2.0 campaign",
      dateRange: "March 1, 2022 – March 8, 2022",
      yesPercent: 60,
      noPercent: 30,
      abstainPercent: 10,
      proposalUrl: "SOME_URL",
    },
    {
      title:
        "Request for 50k in initial funds for the Marketing Guild Committee",
      dateRange: "March 1, 2022 – March 8, 2022",
      yesPercent: 80,
      noPercent: 0,
      abstainPercent: 20,
      proposalUrl: "SOME_URL",
    },
  ]

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H4>Votes</H4>
      <ResponsiveStack spacing={12} mt={12}>
        {completedProposals.map((p) => (
          <VoteResultsCard {...p} />
        ))}
      </ResponsiveStack>
    </PageSection>
  )
}

export default DaoVotes
