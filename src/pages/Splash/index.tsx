import React, { FC } from "react"
import Hero from "./Hero"
import RoleForEveryoneCard from "./RoleForEveryoneCard"
import StakerRole from "./UserRoles/StakerRole"

const SplashPage: FC = () => {
  return (
    <>
      <Hero />
      <StakerRole />
      {/*<RoleForEveryoneCard />*/}
    </>
  )
}

export default SplashPage
