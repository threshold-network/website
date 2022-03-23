import React from "react"
import RoleTemplate from "./RoleTemplate"
import lpRole from "../../../static/images/liquidity-provider-role.png"

const LiquidityProviderRole = () => {
  return (
    <RoleTemplate
      bgColor="blackAlpha.300"
      title="Provide Liquidity"
      description="Liquidity providers earn yields by depositing assets into liquidity pools."
      footerButtons={[{ text: "Learn more", to: "/liquidity-provider" }]}
      imgSrc={lpRole}
      rowReverse
    />
  )
}

export default LiquidityProviderRole
