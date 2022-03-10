import React from "react"
import lpRoleImage from "../../../static/images/lp-role-illustration.png"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import GenericRoleTab from "./GenericRoleTab"

const LiquidityProviderTab = () => {
  return (
    <GenericRoleTab
      imgSrc={lpRoleImage}
      body="Take on a role as a liquidity provider with Threshold and deposit into a pool. You can earn returns by depositing into one of Threshold’s liquidity pools."
      footerButtons={[
        {
          variant: "outline",
          href: ExternalLinkHref.LP_ROLE_LEARN_MORE,
          text: "Learn More",
        },
      ]}
    />
  )
}

export default LiquidityProviderTab
