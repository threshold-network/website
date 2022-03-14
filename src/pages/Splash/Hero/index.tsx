import React from "react"
import { Box, Container, Stack } from "@chakra-ui/react"
import { H1, H5 } from "../../../components/Typography"
import heroGradientCurve from "../../../static/images/hero-gradient-swoosh.png"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import ExternalButtonLink from "../../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"

const Hero = () => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <Box position="relative" minHeight={{ base: "740px", md: "800px" }}>
      <Box
        backgroundImage={heroGradientCurve}
        backgroundPosition={{ base: "center bottom", md: "center 250px" }}
        backgroundSize={{ base: "contain", md: "100% 100%" }}
        backgroundRepeat="no-repeat"
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        top={0}
        zIndex="-1"
      />
      <Container maxW="6xl" px="48px">
        <Stack spacing={8} marginTop={{ base: "48px", md: "120px" }}>
          <H1
            noOfLines={2}
            maxW="740px"
            fontSize={{ base: "44px", md: "60px" }}
          >
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
