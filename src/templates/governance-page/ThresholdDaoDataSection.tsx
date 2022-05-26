import { HStack, Icon, Stack } from "@chakra-ui/react"
import { gql } from "graphql-request"
import { IoDocument } from "react-icons/all"
import { BigNumber } from "ethers"
import Card from "../../components/Card"
import { PageSection } from "../../components/PageSection"
import { H2, H3, LabelMd } from "../../components"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { StatBoxGroup } from "../../components/StatBox"
import { T_NETWORK_SUBGRAPH_URL } from "../../config/subgraph"
import useQuery from "../../hooks/useQuery"
import { formatTokenAmount } from "../../utils"

const ThresholdDaoDataSection = () => {
  const totalTreasuryHoldings = "$50,000,000"

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
            <LabelMd color="gray.500">Total Treasury Holdings</LabelMd>
            <H2>{totalTreasuryHoldings}</H2>
          </Stack>
          <ExternalButtonLink
            display={{ base: "none", md: "inherit" }}
            variant="outline"
            leftIcon={<Icon as={IoDocument} />}
            href={"" as ExternalLinkHref}
          >
            Parts of the DAO
          </ExternalButtonLink>
        </HStack>
        <StatBoxGroup stats={stats} />
      </Card>
    </PageSection>
  )
}

export default ThresholdDaoDataSection
