import React from "react"
import { Image, Stack } from "@chakra-ui/react"
import stakerRoleIllustration from "../../../static/images/staker-role-illustration.png"
import { Body2 } from "../../../components/Typography"
import ExternalButtonLink from "../../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"

const StakerTab = () => {
  const isMobile = useChakraBreakpoint("md")
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="space-around"
      p={10}
      spacing={8}
    >
      <Image
        src={stakerRoleIllustration}
        w={{ base: "300px", md: "auto" }}
        margin="auto"
      />
      <Stack spacing={8}>
        <Body2
          maxW={{ base: "auto", md: "445px" }}
          color="gray.300"
          margin="auto"
        >
          Take on a role as an active staker with Threshold and be a core
          component of the network. This requires more of a time investment, but
          by locking your T tokens you will help secure the network and earn
          rewards.
        </Body2>
        <Stack direction={{ base: "column", md: "row" }} spacing={8}>
          <ExternalButtonLink variant="outline" href={ExternalLinkHref.DAPP}>
            Launch Staking
          </ExternalButtonLink>
          <ExternalButtonLink
            variant={isMobile ? "outline" : "link"}
            href={ExternalLinkHref.STAKER_ROLE_LEARN_MORE}
          >
            Learn More
          </ExternalButtonLink>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default StakerTab
