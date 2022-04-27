import { FC } from "react"
import Card from "../../../components/Card"
import { Stack } from "@chakra-ui/react"
import { BodyLg, LabelSm } from "../../../components"
import ProgressWithPercentage from "./ProgressWithPercentage"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import useFormatDate from "../../../hooks/useFormatDate"
import { Proposal } from "../../../hooks/useSnapshotProposals"

const VoteResultsCard: FC<Proposal> = ({
  title,
  start,
  end,
  proposalUrl,
  yesPercent,
  noPercent,
}) => {
  const formatDate = useFormatDate()
  const startDate = formatDate(start * 1000)
  const endDate = formatDate(end * 1000)
  const dateRange = `${startDate} - ${endDate}`
  return (
    <Card
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <BodyLg color="gray.50" noOfLines={2}>
        {title}
      </BodyLg>
      <LabelSm color="gray.500" mt={2}>
        {dateRange}
      </LabelSm>
      <Stack spacing={2} mt={8}>
        <ProgressWithPercentage
          height="12px"
          value={yesPercent}
          colorScheme="green"
        />
        <ProgressWithPercentage
          height="12px"
          value={noPercent}
          colorScheme="red"
        />
      </Stack>
      <ExternalButtonLink
        mt={4}
        variant="link"
        href={proposalUrl as ExternalLinkHref}
      >
        View
      </ExternalButtonLink>
    </Card>
  )
}

export default VoteResultsCard
