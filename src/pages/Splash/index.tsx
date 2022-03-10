import React, { FC } from "react"
import { Container } from "@chakra-ui/react"
import Hero from "./Hero"
import RoleForEveryoneCard from "./RoleForEveryoneCard"

const SplashPage: FC = () => {
  return (
    <>
      <Hero />
      <Container maxW="1040px">
        <RoleForEveryoneCard />
      </Container>
    </>
  )
}

export default SplashPage
