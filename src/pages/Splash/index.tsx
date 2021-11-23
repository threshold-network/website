import { FC } from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
} from "@chakra-ui/react"
import { H1, H5 } from "../../components/Typography"
import SplashCard, { SplashCardInfo } from "./SplashCard"
import {
  BsStack,
  IoLockClosedSharp,
  IoShieldCheckmarkSharp,
} from "react-icons/all"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"
import { ExternalLink } from "../../components/Navbar/types"

const SplashPage: FC = () => {
  const mediumBreakpoint = useChakraBreakpoint("md")

  const splashCardContent: SplashCardInfo[] = [
    {
      title: "Decentralized",
      icon: BsStack,
      body: "Threshold is the only bridge protocol that is truly decentralized.",
    },
    {
      title: "Secure",
      icon: IoShieldCheckmarkSharp,
      body: "Threshold is audited by the strongest firms in the space.",
    },
    {
      title: "Private",
      icon: IoLockClosedSharp,
      body: "Threshold preserves privacy on the public blockchain.",
    },
  ]

  return (
    <Container maxW="4xl" mt={20} paddingBottom={36}>
      <H1
        color="white"
        fontWeight="700"
        fontSize={{ base: "44px", sm: "52px", lg: "60px" }}
      >
        Threshold gives users sovereignty on the public blockchain.
      </H1>
      <H5 color="purple.100" mt={6} maxW="lg">
        Threshold Network is the first ever on-chain merge between two existing
        networks.
      </H5>
      <HStack mt={16}>
        <Button
          isFullWidth={mediumBreakpoint}
          onClick={() => {
            window.open(ExternalLink.THRESHOLD_DISCORD)
          }}
        >
          Join Discord
        </Button>

        <Button
          isFullWidth={mediumBreakpoint}
          variant="outline"
          onClick={() => {
            window.open(ExternalLink.THRESHOLD_BLOG)
          }}
        >
          Read the Blog
        </Button>
      </HStack>
      <H5 color="white" mt={32}>
        Why Threshold Network?
      </H5>
      <Box position="relative">
        {!mediumBreakpoint && (
          <Divider
            position="absolute"
            top="73px"
            zIndex="1"
            direction="horizontal"
            borderColor="purple.300"
          />
        )}
        <Stack
          direction={{ base: "column", md: "row" }}
          mt={8}
          bg="blackAlpha.300"
          divider={<StackDivider borderColor="purple.300" />}
          border="1px solid"
          borderColor="purple.300"
        >
          {splashCardContent.map((card, i) => (
            <SplashCard
              {...card}
              key={card.title}
              borderTop={mediumBreakpoint && i !== 0 ? "1px solid #9974FF" : 0}
              borderBottom={mediumBreakpoint ? "1px solid #9974FF" : 0}
              borderLeft={mediumBreakpoint || i === 0 ? 0 : undefined}
              borderRight={
                mediumBreakpoint || i === splashCardContent.length - 1
                  ? 0
                  : undefined
              }
              isCardColumn={mediumBreakpoint}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export default SplashPage
