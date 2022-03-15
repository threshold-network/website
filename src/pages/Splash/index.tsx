import React, { FC } from "react"
import Hero from "./Hero"
import StakerRole from "./UserRoles/StakerRole"
import LiquidityProviderRole from "./UserRoles/LiquidityProviderRole"
import BtcRole from "./UserRoles/BtcRole"
import TokenHolderRole from "./UserRoles/TokenHolderRole"
import TakeTheQuiz from "./UserRoles/TakeTheQuiz"
import MigrationInfoSection from "./MigrationInfoSection"

const SplashPage: FC = () => {
  return (
    <>
      <Hero />
      <StakerRole />
      <LiquidityProviderRole />
      <BtcRole />
      <TokenHolderRole />
      <TakeTheQuiz />
      <MigrationInfoSection />
    </>
  )
}

export default SplashPage
