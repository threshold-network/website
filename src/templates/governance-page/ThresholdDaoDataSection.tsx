import { Button, HStack, Icon, Stack } from "@chakra-ui/react"
import { gql } from "graphql-request"
import { FiArrowUpRight, IoDocument } from "react-icons/all"
import { BigNumber } from "ethers"
import { Link as GatsbyLink } from "gatsby"
import Card from "../../components/Card"
import { PageSection } from "../../components/PageSection"
import { H2, H3, LabelMd } from "../../components"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { StatBoxGroup } from "../../components/StatBox"
import { T_NETWORK_SUBGRAPH_URL } from "../../config/subgraph"
import useQuery from "../../hooks/useQuery"
import { formatFiatCurrencyAmount, formatTokenAmount } from "../../utils"
import { useBalanceOfDAOTreasury } from "../../hooks/useBalanceOfDAOTreasury"

const ThresholdDaoDataSection = () => {
  const totalTreasuryHoldings = useBalanceOfDAOTreasury()

  const { data } = useQuery<{
    daometric: { liquidTotal: string; stakedTotal: string }
    tokenholderDelegations: { id: string }[]
    stakeDelegations: { id: string }[]
  }>(
    T_NETWORK_SUBGRAPH_URL,
    gql`
      query {
        daometric(id: "dao-metrics") {
          liquidTotal
          stakedTotal
        }
        tokenholderDelegations(first: 1000, where: { totalWeight_gt: "0" }) {
          id
        }
        stakeDelegations(first: 1000, where: { totalWeight_gt: "0" }) {
          id
        }
      }
    `
  )
  const { daometric, tokenholderDelegations, stakeDelegations } = data || {
    daometric: { liquidTotal: "0", stakedTotal: "0" },
    tokenholderDelegations: [],
    stakeDelegations: [],
  }
  const delegated = formatTokenAmount(
    BigNumber.from(daometric.liquidTotal)
      .add(BigNumber.from(daometric.stakedTotal))
      .toString()
  )
  const stats = [
    {
      amount: delegated,
      label: "Delegated",
    },
    {
      amount: stakeDelegations.length.toString(),
      label: "Staker DAO Addresses",
    },
    {
      amount: tokenholderDelegations.length.toString(),
      label: "Token Holder DAO Addresses",
    },
  ]

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H3>Threshold DAO</H3>
      <Card mt={8} p={12} boxShadow="rgba(159, 162, 166, 0.1) 0px 0px 96px;">
        <HStack justifyContent="space-between" mb={16}>
          <Stack spacing={6}>
            <LabelMd textTransform="uppercase" color="gray.500">
              Total Treasury Holdings
            </LabelMd>
            <H2>{formatFiatCurrencyAmount(totalTreasuryHoldings)}</H2>
          </Stack>
          <Button
            display={{ base: "none", md: "inherit" }}
            variant="outline"
            leftIcon={<Icon as={IoDocument} />}
            rightIcon={<FiArrowUpRight />}
            as={GatsbyLink}
            to={"/governance#guilds" as ExternalLinkHref}
          >
            Parts of the DAO
          </Button>
        </HStack>
        <StatBoxGroup stats={stats} />
      </Card>
    </PageSection>
  )
}

export default ThresholdDaoDataSection
