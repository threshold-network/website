import { Button, Stack, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { H2, H3, LabelMd } from "../../../components"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import Card from "../../../components/Card"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import { StatBoxGroup } from "../../../components/StatBox"
import { useTBTCTokenPrice } from "../../../contexts/TokenPriceContext"
import {
  exchangeAPI,
  formatFiatCurrencyAmount,
  formatTokenAmount,
  formatUnits,
} from "../../../utils"

interface TBTCStatsProps {
  tbtcTvl: string // in wei
  tbtcUniqueAddresses: string
  totalMints: string
}

export const TBTCStats: FC<TBTCStatsProps> = ({
  tbtcTvl,
  tbtcUniqueAddresses,
  totalMints,
}) => {
  const stats = [
    {
      amount: `${formatTokenAmount(tbtcTvl, "0,00.00")}`,
      label: "tBTC",
      variant: "primary",
    },
    {
      amount: totalMints,
      label: "Total mints",
      variant: "primary",
    },
    {
      amount: tbtcUniqueAddresses,
      label: "tBTC holding addresses",
      variant: "primary",
    },
  ]

  const tBTCPrice = useTBTCTokenPrice()
  const tBTCTvlInUSD = exchangeAPI
    .toUsdBalance(formatUnits(tbtcTvl), tBTCPrice)
    .toString()
  const tBTCTvlInUSDFormatted =
    formatFiatCurrencyAmount(tBTCTvlInUSD).toUpperCase()

  return (
    <>
      <H3 fontWeight={600} mb={"2rem"}>
        tBTC Stats
      </H3>
      <Card>
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          justifyContent={"space-between"}
        >
          <VStack alignItems={"flex-start"} mt={{ base: "30px", lg: "10px" }}>
            <LabelMd color="gray.500" textTransform={"uppercase"}>
              Total value locked
            </LabelMd>
            <H2 mt={"1rem"}>{`${tBTCTvlInUSDFormatted} USD`}</H2>
          </VStack>
          <ExternalButtonLink
            href={ExternalLinkHref.DUNE_DASHBOARD_TBTC}
            variant="outline"
            size="lg"
            alignSelf={{ xs: "center", base: "flex-end", lg: "flex-start" }}
          >
            View Dune Analytics Dashboard
          </ExternalButtonLink>
        </Stack>
        <StatBoxGroup stats={stats} />
      </Card>
    </>
  )
}
