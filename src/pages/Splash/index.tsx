import React, { FC } from "react"
import Hero from "./Hero"
import StakerRole from "./UserRoles/StakerRole"
import LiquidityProviderRole from "./UserRoles/LiquidityProviderRole"
import BtcRole from "./UserRoles/BtcRole"
import TokenHolderRole from "./UserRoles/TokenHolderRole"

const SplashPage: FC = () => {
  return (
    <>
      <Hero />
      <StakerRole />
      <LiquidityProviderRole />
      <BtcRole />
      <TokenHolderRole />
      {/*<RoleForEveryoneCard />*/}
    </>
  )
}

export default SplashPage
