import React from "react"
import RoleTemplate from "./RoleTemplate"
import {
  ExternalLinkHref,
  InternalLinkHref,
} from "../../../components/Navbar/types"
import tokenHolderRole from "../../../static/images/token-holder-role.png"

const TokenHolderRole = () => {
  return (
    <RoleTemplate
      bgColor="blackAlpha.600"
      title="Token Holder DAO"
      description="Make the most of your T tokens on the Threshold Network by participating in DAO governance."
      footerButtons={[
        { href: ExternalLinkHref.GOVERNANCE, text: "Governance Forum" },
        {
          text: "Learn more",
          variant: "outline",
          to: InternalLinkHref.TOKEN_HOLDER_ROLE,
        },
      ]}
      imgSrc={tokenHolderRole}
      rowReverse
    />
  )
}

export default TokenHolderRole
