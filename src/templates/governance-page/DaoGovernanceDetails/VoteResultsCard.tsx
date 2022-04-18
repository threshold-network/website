import { FC } from "react"
import Card from "../../../components/Card"
import { Stack } from "@chakra-ui/react"
import { BodyLg, LabelSm } from "../../../components"
import ProgressWithPercentage from "./ProgressWithPercentage"

interface Props {
  title: string
  dateRange: string
  yesPercent: number
  noPercent: number
  abstainPercent: number
  proposalUrl: string
}

const VoteResultsCard: FC<Props> = ({
  title,
  dateRange,
  yesPercent,
  noPercent,
  abstainPercent,
}) => {
  return (
    <Card w="100%">
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
        <ProgressWithPercentage
          height="12px"
          value={abstainPercent}
          colorScheme="gray"
        />
      </Stack>
    </Card>
  )
}

export default VoteResultsCard
