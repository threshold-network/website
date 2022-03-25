import React, { FC } from "react"
import {
  PageSection,
  ResponsiveStack,
  SectionTextContainer,
} from "../../components/PageSection"
import { BodyLg, H5, LabelMd } from "../../components/Typography"
import DiscordButton from "../../components/Buttons/DiscordButton"
import GithubButton from "../../components/Buttons/GithubButton"
import TelegramButton from "../../components/Buttons/TelegramButton"
import { Box, StackDivider } from "@chakra-ui/react"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"

const Content: FC<{
  title: string
  subTitle: string
  body: string
  footerButtons: JSX.Element[]
}> = ({ title, subTitle, body, footerButtons }) => (
  <Box maxW={{ base: "100%", md: "424px" }}>
    <LabelMd textTransform="uppercase" color="gray.300">
      {title}
    </LabelMd>
    <H5 mt={1} color="gray.50">
      {subTitle}
    </H5>
    <BodyLg mt={6} color="gray.300">
      {body}
    </BodyLg>
    <ResponsiveStack justifyContent="flex-start" mt={6}>
      {footerButtons.map((Button) => Button)}
    </ResponsiveStack>
  </Box>
)

const JoinTheCommunity = () => {
  const mdScreen = useChakraBreakpoint("md")
  return (
    <PageSection bg="gray.800">
      <ResponsiveStack
        divider={mdScreen ? <StackDivider bg="gray.700" /> : undefined}
        spacing={16}
      >
        <Content
          title="Get Involved"
          subTitle="Become a part of our community"
          body="Join our Discord server and our Telegram to get involved and stay up
            to date."
          footerButtons={[<DiscordButton />, <TelegramButton />]}
        />
        <Content
          title="For developers"
          subTitle="Learn more about the network"
          body="Learn more about the Threshold network by reading the documentation or visiting Github."
          footerButtons={[<GithubButton />]}
        />
      </ResponsiveStack>
    </PageSection>
  )
}

export default JoinTheCommunity
