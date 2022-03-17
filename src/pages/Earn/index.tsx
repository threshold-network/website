import React from "react"
import { Route } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import { InternalLinkHref } from "../../components/Navbar/types"
import StakerRole from "./StakerRole"
import LpRole from "./LpRole"
import BtcRole from "./BtcRole"
import TokenHolderRole from "./TokenHolderRole"

const EarnPage = () => {
  return (
    <Box>
      Earn Page
      <Route path={InternalLinkHref.STAKER_ROLE} component={StakerRole} />
      <Route path={InternalLinkHref.LP_ROLE} component={LpRole} />
      <Route path={InternalLinkHref.BTC_ROLE} component={BtcRole} />
      <Route
        path={InternalLinkHref.TOKEN_HOLDER_ROLE}
        component={TokenHolderRole}
      />
    </Box>
  )
}

export default EarnPage
