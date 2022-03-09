import React, { FC } from "react"
import { Container } from "@chakra-ui/react"
import Hero from "../../components/Hero"

const SplashPage: FC = () => {
  return (
    <Container maxW="6xl">
      <Hero />
    </Container>
  )
}

export default SplashPage
