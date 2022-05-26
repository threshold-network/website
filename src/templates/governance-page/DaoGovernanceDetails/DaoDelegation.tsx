import { FC } from "react"
import { FixedNumber } from "ethers"
import { gql } from "graphql-request"
import { HStack, Stack } from "@chakra-ui/react"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { BodyLg, BodyMd, BodySm, H3, H4, LabelMd } from "../../../components"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import Card from "../../../components/Card"
import Progress from "../../../components/Progress"
import useQuery from "../../../hooks/useQuery"
import { formatTokenAmount } from "../../../utils"
import { T_NETWORK_SUBGRAPH_URL } from "../../../config/subgraph"
import { DAO } from "./types"

const T_TOTAL_SUPPLY_IN_WEI = "10000000000000000000000000000"

const DaoDelegation: FC<{ selectedDao: DAO }> = ({ selectedDao }) => {
  const { isFetching, data, error } = useQuery<{
    daometric: { liquidTotal: string; stakedTotal: string }
    epoches: { totalStaked: string }[]
  }>(
    T_NETWORK_SUBGRAPH_URL,
    gql`
      query {
        daometric(id: "dao-metrics") {
          liquidTotal
          stakedTotal
        }
        epoches(orderBy: startTime, orderDirection: desc, first: 1) {
          totalStaked
        }
      }
    `
  )
  const { daometric, epoches } = data || {
    daometric: { liquidTotal: "0", stakedTotal: "0" },
    epoches: [{ totalStaked: "1" }],
  }
  const totalDelegated =
    selectedDao === "STAKER" ? daometric.stakedTotal : daometric.liquidTotal
  // TODO: Make sure if `maxDelegation` for token holder dao should be T total supply.
  const maxDelegation =
    selectedDao === "STAKER" ? epoches[0].totalStaked : T_TOTAL_SUPPLY_IN_WEI

  const percentDelegated = Math.floor(
    FixedNumber.fromString(totalDelegated)
      .mulUnsafe(FixedNumber.fromString("100"))
      .divUnsafe(FixedNumber.from(maxDelegation))
      .toUnsafeFloat()
  )

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H4 color="gray.300">
        {selectedDao === "STAKER" ? "Staker" : "Token Holder"} DAO Delegation
      </H4>
      <ResponsiveStack spacing={12} mt={12}>
        <Card w="full">
          <BodyLg color="gray.100">
            {selectedDao === "STAKER"
              ? "Members of the Staker DAO are exclusively stakers. Get started below voting on staker proposals."
              : "T token holders can delegate their vote using the Boardroom dashboard."}
          </BodyLg>
          <ExternalButtonLink href={"NEED_URL" as ExternalLinkHref} mt={8}>
            Delegate your vote
          </ExternalButtonLink>
        </Card>
        <Stack w="full" spacing={4} justifyContent="center">
          <LabelMd textTransform="uppercase" color="gray.500">
            Liquid T Delegated
          </LabelMd>
          <H3 color="gray.100">{`${formatTokenAmount(totalDelegated)} T`}</H3>
          <HStack w="full">
            <Progress
              w="full"
              height="8px"
              value={percentDelegated}
              size="xs"
              variant="brand"
            />
            <BodySm color="gray.500">{percentDelegated}%</BodySm>
          </HStack>
          <BodyMd color="gray.500">
            Out of {formatTokenAmount(maxDelegation)} Circulating Supply
          </BodyMd>
        </Stack>
      </ResponsiveStack>
    </PageSection>
  )
}

export default DaoDelegation
