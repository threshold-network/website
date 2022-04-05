import { FC } from "react"
import { Stack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"

export interface Proposal {
  id: string
  title: string
  createdAt: string
  createdBy: string
  content: string | { raw: string; html: string }
  url: string
}

const ProposalCard: FC<Proposal> = ({
  title,
  createdAt,
  createdBy,
  content,
  url,
}) => {
  const _createdAt = new Date(createdAt).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
  })
  const subTitle = `${_createdAt} · ${createdBy}`
  const _content = typeof content === "string" ? content : content.raw
  return (
    <Card maxW={{ base: "100%", md: "336px" }}>
      <Stack spacing={6}>
        <Stack spacing={4}>
          <Card.Title>{title}</Card.Title>
          <Card.SubTitle>{subTitle}</Card.SubTitle>
        </Stack>
        <Card.Divider />
        <Card.Body
          as="div"
          dangerouslySetInnerHTML={{ __html: _content }}
          noOfLines={6}
        />
      </Stack>
      <ExternalButtonLink mt={16} href={url as ExternalLinkHref} variant="link">
        View Proposal
      </ExternalButtonLink>
    </Card>
  )
}

export default ProposalCard
