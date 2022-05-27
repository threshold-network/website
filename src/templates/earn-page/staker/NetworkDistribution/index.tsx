import { Box, HStack, Icon, SimpleGrid, Stack } from "@chakra-ui/react"
import { gql } from "graphql-request"
import Card from "../../../../components/Card"
import TStakedChart from "./TStakedChart"
import { BodyLg, H2, H3, H5, LabelMd } from "../../../../components"
import useQuery from "../../../../hooks/useQuery"
import { T_NETWORK_SUBGRAPH_URL } from "../../../../config/subgraph"
import {
  exchangeAPI,
  formatFiatCurrencyAmount,
  formatTokenAmount,
  formatUnits,
} from "../../../../utils"
import StatBox from "../../../../components/StatBox"
import { useTTokenPrice } from "../../../../contexts/TokenPriceContext"
import {
  BsFillInfoCircleFill,
  IoInformationCircleOutline,
} from "react-icons/all"

function NetworkDistribution() {
  const { isFetching, data, error } = useQuery<{
    epoches: { totalStaked: string }[]
    minStakeAmounts: { amount: string }[]
  }>(
    T_NETWORK_SUBGRAPH_URL,
    gql`
      query {
        epoches(orderBy: startTime, orderDirection: desc, first: 1) {
          totalStaked
        }
        minStakeAmounts(first: 1, orderBy: updatedAt, orderDirection: desc) {
          amount
        }
      }
    `
  )
  const { epoches, minStakeAmounts } = data || {
    epoches: [{ totalStaked: "0" }],
    minStakeAmounts: [{ amount: "0" }],
  }
  const totalStaked = !error ? epoches[0].totalStaked : "0"
  const forrmattedTotalStaked = formatTokenAmount(totalStaked)
  const minStakeAmount = formatTokenAmount(
    !error ? minStakeAmounts[0].amount : "0"
  )
  const tPrice = useTTokenPrice()
  const totalValueStakedInUSD = formatFiatCurrencyAmount(
    exchangeAPI.toUsdBalance(formatUnits(totalStaked), tPrice).toString()
  )

  return (
    <Box mt={8}>
      <H3 color="gray.50">Network distribution</H3>
      <Card mt={8}>
        <Stack justifyContent="space-between" direction="row" mb={12}>
          {/* <Stack spacing={4}>
          <LabelMd color="gray.500">Total Value Locked</LabelMd>`
          <H2 color="gray.50">$2,400,000</H2>
        </Stack> */}
          <Stack spacing={4}>
            <LabelMd textTransform="uppercase" color="gray.500">
              Total Value Staked
            </LabelMd>
            <H2 color="gray.50">{forrmattedTotalStaked} T</H2>
            <H5 color="gray.500">{totalValueStakedInUSD}</H5>
          </Stack>
        </Stack>
        <TStakedChart />
        <HStack spacing={4}>
          <Icon boxSize="20px" color="gray.500" as={BsFillInfoCircleFill} />
          <BodyLg color="gray.500">
            The minimum T required to stake is {minStakeAmount} T.
          </BodyLg>
        </HStack>
      </Card>
    </Box>
  )
}

export default NetworkDistribution
