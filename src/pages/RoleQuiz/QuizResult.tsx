import { FC } from "react"
import { Box, Stack } from "@chakra-ui/react"
import { Role } from "./types"
import { Body2, H2, H5 } from "../../components/Typography"

const ResultCard: FC<{ result: string; description: string }> = ({
  result,
  description,
}) => {
  return (
    <Box>
      <Stack>
        <H5>Your result:</H5>
        <H2>{result}</H2>
        <Body2>{description}</Body2>
      </Stack>
    </Box>
  )
}

const QuizResult: FC<{ result: Role }> = ({ result }) => {
  switch (result) {
    case "BTC_ROLE":
      return (
        <ResultCard
          result="BTC / tBTC User"
          description="Based on your quiz answers, the role suited to your preferences is a tBTC minter for Threshold. To learn more about this role, head to the page below!"
        />
      )
    case "STAKER_ROLE":
      return (
        <ResultCard
          result="Staker"
          description="Based on your quiz answers, the role suited to your preferences is a staker for Threshold. To learn more about this role, head to the page below!"
        />
      )
    case "LIQUIDITY_PROVIDER_ROLE":
      return (
        <ResultCard
          result="Liquidity Provider"
          description="Based on your quiz answers, the role suited to your preferences is a liquidity provider for Threshold. To learn more about this role, head to the page below!"
        />
      )
    case "TOKEN_HOLDER_ROLE":
      return (
        <ResultCard
          result="Token Holder"
          description="Based on your quiz answers, the role suited to your preferences is a token holder for Threshold. To learn more about this role, head to the page below!"
        />
      )
  }
}

export default QuizResult
