import React, { FC } from "react"
import { Box } from "@chakra-ui/react"
import { ResponsiveStack } from "../../../components/PageSection"
import { H5 } from "../../../components/Typography"
import SectionTemplate from "../SectionTemplate"
import ProposalCard from "./ProposalCard"
import { ImageProps } from "../../../components"

interface ButtonInfo {
  label: string
  url: string
  variant: string
}

interface ActiveCommunityProps {
  buttons: ButtonInfo[]
  description: string
  title: string
  image: ImageProps
}

const ActiveCommunity: FC<ActiveCommunityProps> = ({
  title,
  description,
  buttons,
  image,
}) => {
  return (
    <SectionTemplate
      bgColor="gray.900"
      title={title}
      description={description}
      buttons={buttons}
      image={image}
    >
      <Box mt={24}>
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
      </Box>
    </SectionTemplate>
  )
}

export default ActiveCommunity
