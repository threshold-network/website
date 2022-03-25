import React from "react"
import { H5 } from "../../../components/Typography"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import ProposalCard from "./ProposalCard"

const CurrentProposals = () => {
  return (
    <PageSection bg="gray.900">
      <H5 color="gray.300">Current Proposals</H5>
      <ResponsiveStack mt={8} spacing={8}>
        <ProposalCard
          title="Threshold Network Reward Mechanisms Proposal I – Stable Yield for
              Non-Institutional Staker Welfare"
          subTitle="oct 2021 · Arj"
          body="Fork Liquity Protocol 3 to build a decentralized stablecoin
            (Threshold USD - thUSD) purely backed by tBTC. Make Threshold DAO
            owner of the protocol and distribute profits through T buybacks
            and/or PCV..."
          href="yea yea yea"
        />
        <ProposalCard
          title="Threshold Network Reward Mechanisms Proposal I – Stable Yield for
              Non-Institutional Staker Welfare"
          subTitle="oct 2021 · Arj"
          body="Fork Liquity Protocol 3 to build a decentralized stablecoin
            (Threshold USD - thUSD) purely backed by tBTC. Make Threshold DAO
            owner of the protocol and distribute profits through T buybacks
            and/or PCV..."
          href="yea yea yea"
        />
        <ProposalCard
          title="Threshold Network Reward Mechanisms Proposal I – Stable Yield for
              Non-Institutional Staker Welfare"
          subTitle="oct 2021 · Arj"
          body="Fork Liquity Protocol 3 to build a decentralized stablecoin
            (Threshold USD - thUSD) purely backed by tBTC. Make Threshold DAO
            owner of the protocol and distribute profits through T buybacks
            and/or PCV..."
          href="yea yea yea"
        />
      </ResponsiveStack>
    </PageSection>
  )
}

export default CurrentProposals
