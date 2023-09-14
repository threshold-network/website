import React, { FC } from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"
import { ResponsiveStack } from "../../../components/PageSection"
import { H5 } from "../../../components/Typography"
import SectionTemplate from "../SectionTemplate"
import ProposalForumCard, {
  ProposalForum,
} from "../../../components/ProposalForumCard"
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
  proposals: ProposalForum[]
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
      preTitle=""
      size="sm"
      bgColor="gray.900"
      title={title}
      description={description}
      buttons={buttons}
      image={image}
    >
      <Box mt={24}>
        <H5 color="gray.300">Current Proposals</H5>
        <SimpleGrid columns={{ base: 1, md: 3 }} mt={8} spacing={8}>
          {proposals.map((proposal) => (
            <ProposalForumCard key={proposal.id} {...proposal} />
          ))}
        </SimpleGrid>
      </Box>
    </SectionTemplate>
  )
}

export default ActiveCommunity
