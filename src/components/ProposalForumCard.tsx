import { FC } from "react"
import { Stack } from "@chakra-ui/react"
import Card from "./Card"
import ExternalButtonLink from "./Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "./Navbar/types"
import useFormatDate from "../hooks/useFormatDate"

export interface ProposalForum {
  id: string
  title: string
  createdAt: string
  createdBy: string
  content: string | { raw: string; html: string }
  url: string
}

const ProposalForumCard: FC<ProposalForum> = ({
  title,
  createdAt,
  createdBy,
  content,
  url,
}) => {
  const formatDate = useFormatDate()
  const _createdAt = formatDate(createdAt)
  const subTitle = `${_createdAt} · ${createdBy}`
  const _content = typeof content === "string" ? content : content.raw
  return (
    <Card
      maxW={{ base: "100%", md: "336px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Stack spacing={6}>
        <Stack spacing={4}>
          <Card.Title noOfLines={2}>{title}</Card.Title>
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

export default ProposalForumCard
