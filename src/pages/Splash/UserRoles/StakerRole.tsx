import React from "react"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import RoleTemplate from "./RoleTemplate"
import stakerRole from "../../../static/images/staker-role.png"

const StakerRole = () => {
  return (
    <RoleTemplate
      bgColor="gray.900"
      title="Threshold Staking"
      description="Stakers escrow T tokens to run a node on the Threshold Network and
              earn rewards."
      footerButtons={[
        { href: ExternalLinkHref.DAPP, text: "Start Staking" },
        { text: "Learn more", variant: "outline", to: "/staker" },
      ]}
      imgSrc={stakerRole}
    />
  )
}

export default StakerRole
