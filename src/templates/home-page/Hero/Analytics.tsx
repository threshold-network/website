import { Stack, StackProps } from "@chakra-ui/react"
import { FC } from "react"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import { StatBoxGroup } from "../../../components/StatBox"
import { formatFiatCurrencyAmount, formatTokenAmount } from "../../../utils"

interface AnalyticsProps {
  tbtcTtvl: string // in wei
  tbtcUniqueAddresses: string
  stakingTvlInUSD: string // without the `$` sign
}

export const Analytics: FC<AnalyticsProps & StackProps> = ({
  tbtcTtvl,
  tbtcUniqueAddresses,
  stakingTvlInUSD,
  ...restProps
}) => {
  const statsStyles = {
    variant: "secondary",
    size: "lg",
    boxShadow: "0px 0px 200px 10px rgba(153, 116, 255, 0.16)",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  }
  const stats = [
    {
      // TODOL make the `btc` word smaller
      amount: `${formatTokenAmount(tbtcTtvl, "0,00.00")}`,
      currency: "btc",
      label: "tBTC TVL",
      ...statsStyles,
    },
    {
      amount: tbtcUniqueAddresses,
      label: "tBTC unique address",
      ...statsStyles,
    },
    {
      amount: formatFiatCurrencyAmount(stakingTvlInUSD, "0a").toUpperCase(),
      label: "Staking TVL",
      ...statsStyles,
    },
  ]

  return (
    <Stack spacing={"10"} {...restProps}>
      <StatBoxGroup stats={stats} spacing={4} />
      <ExternalButtonLink
        href={ExternalLinkHref.DUNE_DASHBOARD_TBTC}
        variant="outline"
        size="lg"
        alignSelf={"center"}
        mt={"2rem"}
      >
        View Dune Analytics Dashboard
      </ExternalButtonLink>
    </Stack>
  )
}
