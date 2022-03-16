import React, { FC } from "react"
import { Box, Stack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import ExternalButtonLink from "../../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"

const ProposalCard: FC<{
  title: string
  subTitle: string
  body: string
  href: string
}> = ({ title, subTitle, body, href }) => {
  return (
    <Card maxW={{ base: "100%", md: "336px" }}>
      <Stack spacing={6}>
        <Stack spacing={4}>
          <Card.Title>{title}</Card.Title>
          <Card.SubTitle>{subTitle}</Card.SubTitle>
        </Stack>
        <Card.Divider />
        <Card.Body>{body}</Card.Body>
      </Stack>
      <ExternalButtonLink
        mt={16}
        href={href as ExternalLinkHref}
        variant="link"
      >
        View Proposal
      </ExternalButtonLink>
    </Card>
  )
}

export default ProposalCard
