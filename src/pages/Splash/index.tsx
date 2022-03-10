import React, { FC } from "react"
import { Box } from "@chakra-ui/react"
import Hero from "./Hero"
import RoleForEveryoneCard from "./RoleForEveryoneCard"

const SplashPage: FC = () => {
  return (
    <>
      <Hero />
      <RoleForEveryoneCard />
      <Box h="300px" w="100%" />
    </>
  )
}

export default SplashPage
