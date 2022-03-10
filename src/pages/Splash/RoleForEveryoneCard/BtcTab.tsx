import React from "react"
import btcRoleImage from "../../../static/images/btc-role-illustration.png"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import GenericRoleTab from "./GenericRoleTab"

const BtcTab = () => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <GenericRoleTab
      imgSrc={btcRoleImage}
      body="Bridge your Bitcoin to Ethereum by minting tBTC. Mint tBTC for a secure and trustless way to participate in DeFi with Bitcoin."
      footerButtons={[
        {
          variant: "outline",
          href: ExternalLinkHref.MINT_TBC,
          text: "Mint tBtc",
        },

        {
          variant: isMobile ? "outline" : "link",
          href: ExternalLinkHref.BTC_ROLE_LEARN_MORE,
          text: "Learn More",
        },
      ]}
    />
  )
}

export default BtcTab
