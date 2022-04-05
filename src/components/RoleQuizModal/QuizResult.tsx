import { FC } from "react"
import { Box, Stack } from "@chakra-ui/react"
import { Result } from "./types"
import { BodyMd, H2, H5 } from "../../components/Typography"

const ResultCard: FC<{ result: string; description: string }> = ({
  result,
  description,
}) => {
  return (
    <Box>
      <Stack>
        <H5>Your result:</H5>
        <H2>{result}</H2>
        <BodyMd>{description}</BodyMd>
      </Stack>
    </Box>
  )
}

const QuizResult: FC<{ result: Result }> = ({ result }) => {
  switch (result) {
    case "BTC":
      return (
        <ResultCard
          result="BTC / tBTC User"
          description="Based on your quiz answers, the role suited to your preferences is a tBTC minter for Threshold. To learn more about this role, head to the page below!"
        />
      )
    case "STAKER":
      return (
        <ResultCard
          result="Staker"
          description="Based on your quiz answers, the role suited to your preferences is a staker for Threshold. To learn more about this role, head to the page below!"
        />
      )
    case "LIQUIDITY":
      return (
        <ResultCard
          result="Liquidity Provider"
          description="Based on your quiz answers, the role suited to your preferences is a liquidity provider for Threshold. To learn more about this role, head to the page below!"
        />
      )
    case "TOKEN_HOLDER":
      return (
        <ResultCard
          result="Token Holder"
          description="Based on your quiz answers, the role suited to your preferences is a token holder for Threshold. To learn more about this role, head to the page below!"
        />
      )
  }
  return null
}

export default QuizResult
