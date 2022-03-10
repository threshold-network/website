import DataTabs from "../../../components/DataTabs"
import StakerTab from "./StakerTab"
import LiquidityProviderTab from "./LiquidityProviderTab"
import BTCTab from "./BtcTab"
import TokenHolderTab from "./TokenHolderTab"

const tabs = [
  {
    label: "Staker",
    content: <StakerTab />,
  },
  {
    label: "Liquidity Provider",
    content: <LiquidityProviderTab />,
  },
  {
    label: "BTC / TBTC User",
    content: <BTCTab />,
  },

  {
    label: "Token Holder",
    content: <TokenHolderTab />,
  },
]

const RolesTabs = () => {
  return <DataTabs data={tabs} />
}

export default RolesTabs
