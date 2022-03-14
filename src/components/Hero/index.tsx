import React from "react"
import { Box, Container, Stack } from "@chakra-ui/react"
import { H1, H5 } from "../Typography"
import heroGradientCurve from "../../static/images/hero-gradient-swoosh.png"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"
import ExternalButtonLink from "../ExternalButtonLink"
import { ExternalLinkHref } from "../Navbar/types"

const Hero = () => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <Box>
      <Box
        mt="200px"
        height="785px"
        backgroundImage={heroGradientCurve}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        position="absolute"
        top="200px"
        left={0}
        right={0}
        bottom={0}
      />
      <Container maxW="6xl" paddingTop={{ base: "80px", md: "135px" }} px={8}>
        <Stack spacing={8}>
          <H1 noOfLines={2} maxW="740px">
            Full control over your digital assets
          </H1>
          <H5 color="gray.300" noOfLines={2} maxW="540px">
            Use threshold cryptographic tools that power user sovereignty on the
            blockchain.
          </H5>
        </Stack>
        <Stack
          mt={{ base: 12, md: 20 }}
          direction={{ base: "column", md: "row" }}
          spacing={12}
        >
          <ExternalButtonLink
            height="auto"
            variant="special"
            href={ExternalLinkHref.DAPP}
          >
            Launch Dapp
          </ExternalButtonLink>
          <ExternalButtonLink
            variant={isMobile ? "outline" : "link"}
            href={ExternalLinkHref.THRESHOLD_DISCORD}
          >
            Join Discord
          </ExternalButtonLink>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
