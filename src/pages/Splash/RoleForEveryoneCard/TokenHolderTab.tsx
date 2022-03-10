import React from "react"
import tokenHolderImage from "../../../static/images/token-holder-role-illustration.png"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import GenericRoleTab from "./GenericRoleTab"

const TokenHolderTab = () => {
  return (
    <GenericRoleTab
      imgSrc={tokenHolderImage}
      body="As a token holder, you can make the most of your tokens on the Threshold Network by first migrating to T tokens. You can also stake your legacy KEEP or NU stakes on the T network in the legacy dapps."
      footerButtons={[
        {
          variant: "outline",
          href: ExternalLinkHref.TOKEN_HOLDER_ROLE_LEARN_MORE,
          text: "Learn More",
        },
      ]}
    />
  )
}

export default TokenHolderTab
