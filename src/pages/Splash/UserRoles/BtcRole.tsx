import React from "react"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import RoleTemplate from "./RoleTemplate"
import btcRole from "../../../static/images/btc-role.png"

const BtcRole = () => {
  return (
    <RoleTemplate
      bgColor="blackAlpha.700"
      title="Bridge BTC to Ethereum"
      description="tBTC is Threshold’s decentralized bridge to bring BTC to the Ethereum network."
      footerButtons={[
        { href: ExternalLinkHref.MINT_TBC, text: "Mint tBTC" },
        { text: "Learn more", variant: "outline", to: "/btc" },
      ]}
      imgSrc={btcRole}
    />
  )
}

export default BtcRole
