import React, { FC } from "react"
import { Box } from "@chakra-ui/react"
import { ResponsiveStack } from "../../../components/PageSection"
import { H5 } from "../../../components/Typography"
import SectionTemplate from "../SectionTemplate"
import ProposalCard, { Proposal } from "./ProposalCard"
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
  proposals: Proposal[]
}

const ActiveCommunity: FC<ActiveCommunityProps> = ({
  title,
  description,
  buttons,
  image,
  proposals,
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
          {proposals.map((proposal) => (
            <ProposalCard key={proposal.id} {...proposal} />
          ))}
        </ResponsiveStack>
      </Box>
    </SectionTemplate>
  )
}

export default ActiveCommunity
