import React from "react"
import { Container, Stack, Box, Button, Image } from "@chakra-ui/react"
import { H2, H5, Label1 } from "../../../components/Typography"
import ExternalButtonLink from "../../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import placeholder from "../../../static/images/staker-role.png"

const StakerRole = () => {
  return (
    <Container maxW="8xl" paddingY={12} px={{ base: 8, md: 16 }}>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box>
          <Label1>Get Started</Label1>
          <H2>Threshold Staking</H2>
          <H5>
            Stakers escrow T tokens to run a node on the Threshold Network and
            earn rewards.
          </H5>
          <Stack>
            <ExternalButtonLink href={ExternalLinkHref.DAPP}>
              Start Staking
            </ExternalButtonLink>
            <Button>Learn more</Button>
          </Stack>
        </Box>
        <Image src={placeholder} />
      </Stack>
    </Container>
  )
}

export default StakerRole
