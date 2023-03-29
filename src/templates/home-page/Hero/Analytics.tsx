import { Stack, Button, StackProps } from "@chakra-ui/react"
import { FC } from "react"
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
  const stats = [
    {
      // TODOL make the `btc` word smaller
      amount: `${formatTokenAmount(tbtcTtvl, "0,00.00")}btc`,
      label: "tBTC TVL",
      variant: "secondary",
    },
    {
      amount: tbtcUniqueAddresses,
      label: "tBTC unique address",
      variant: "secondary",
    },
    {
      amount: formatFiatCurrencyAmount(stakingTvlInUSD, "0a").toUpperCase(),
      label: "Staking TVL",
      variant: "secondary",
    },
  ]

  return (
    <Stack spacing={"10"} {...restProps}>
      <StatBoxGroup stats={stats} />
      <Button size="lg" variant="outline" alignSelf={"center"} mt={"2rem"}>
        View Dune Analytics Dashboard
      </Button>
    </Stack>
  )
}
