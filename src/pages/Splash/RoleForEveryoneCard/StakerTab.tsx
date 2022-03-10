import React from "react"
import stakerRoleIllustration from "../../../static/images/staker-role-illustration.png"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import GenericRoleTab from "./GenericRoleTab"

const StakerTab = () => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <GenericRoleTab
      imgSrc={stakerRoleIllustration}
      body="Take on a role as an active staker with Threshold and be a core
          component of the network. This requires more of a time investment, but
          by locking your T tokens you will help secure the network and earn
          rewards."
      footerButtons={[
        {
          variant: "outline",
          href: ExternalLinkHref.DAPP,
          text: "Launch Staking",
        },

        {
          variant: isMobile ? "outline" : "link",
          href: ExternalLinkHref.STAKER_ROLE_LEARN_MORE,
          text: "Learn More",
        },
      ]}
    />
  )
}

export default StakerTab
