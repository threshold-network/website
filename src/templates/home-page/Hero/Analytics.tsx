import { Stack, Button, StackProps } from "@chakra-ui/react"
import { FC } from "react"
import { StatBoxGroup } from "../../../components/StatBox"

export const Analytics: FC<StackProps> = ({ ...restProps }) => {
  const stats = [
    {
      amount: "420.69btc",
      label: "tBTC TVL",
      variant: "secondary",
    },
    {
      amount: "6500",
      label: "tBTC unique address",
      variant: "secondary",
    },
    {
      amount: "$130M",
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
