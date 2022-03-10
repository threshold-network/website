import { FC } from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Link,
  Stack,
  StackDivider,
} from "@chakra-ui/react"
import { Body1, H1, H5 } from "../../components/Typography"
import SplashCard, { SplashCardInfo } from "./SplashCard"
import {
  BsStack,
  IoLockClosedSharp,
  IoShieldCheckmarkSharp,
} from "react-icons/all"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"
import { ExternalLinkHref } from "../../components/Navbar/types"

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
        maxW="688px"
      >
        Threshold powers user sovereignty on the public blockchain.
      </H1>
      <H5 color="brand.100" mt={6}>
        Access cryptographic tools that ensure full control over your digital
        assets.
      </H5>
      <Stack
        mt={16}
        spacing={8}
        direction={mediumBreakpoint ? "column" : "row"}
      >
        <Button
          height="auto"
          width="auto"
          fontSize="lg"
          px="40px"
          py="20px"
          isFullWidth
          // ={mediumBreakpoint}
          onClick={() => {
            window.open(ExternalLinkHref.STAKE)
          }}
        >
          Start Staking
        </Button>

        <Button
          height="auto"
          width="auto"
          fontSize="lg"
          px="40px"
          py="20px"
          isFullWidth
          // ={mediumBreakpoint}
          variant="outline"
          onClick={() => {
            window.open(ExternalLinkHref.THRESHOLD_BLOG)
          }}
        >
          Read the Blog
        </Button>
      </Stack>
      <H5 color="white" mt={32}>
        Why Threshold Network?
      </H5>
      <Body1 color="brand.100" mt={6}>
        Threshold Network is the first ever on-chain merge between two existing
        networks.{" "}
        <Link textDecoration="underline" href={ExternalLinkHref.LEARN_MORE}>
          Learn more ↗
        </Link>
      </Body1>
      <Box position="relative">
        {/* Divider that spans all 3 cards on large screen sizes */}
        {!mediumBreakpoint && (
          <Divider
            position="absolute"
            top="88px"
            zIndex="1"
            direction="horizontal"
            borderColor="brand.300"
          />
        )}
        <Stack
          direction={{ base: "column", md: "row" }}
          mt={8}
          bg="blackAlpha.300"
          divider={<StackDivider borderColor="brand.300" />}
          border="1px solid"
          borderColor="brand.300"
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
