import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { FC } from "react"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"
import { BodyLg, BodyMd, H2, H3, ImageProps } from "../../../components"
import { Box, Stack, VStack } from "@chakra-ui/react"

interface GuildsSectionProps {
  heroSection: {
    title: string
    description: string
    guildStats: {
      value: string
      label: string
    }[]
    buttons: {
      label: string
      url: string
      variant: ButtonType
    }[]
    guildCards: {
      title: string
      description: string
      memberAvatars: {
        image: ImageProps
        memberName: string
      }[]
      joinUrl: string
    }[]
  }
}

const GuildsSection: FC<GuildsSectionProps> = ({ heroSection, guildCards }) => {
  return (
    <PageSection bg="gray.900" withSmallPadding>
      <Box>
        <ResponsiveStack spacing={8}>
          <Stack w="full" spacing={8}>
            <H3 color="gray.50">{heroSection.title}</H3>
            <BodyLg color="gray.300">{heroSection.description}</BodyLg>
            <Stack mt={6} direction={{ base: "column", md: "row" }} spacing={8}>
              {heroSection.buttons.map((btn) => (
                <CmsButtonLink
                  key={btn.label}
                  cmsVariant={btn.variant}
                  url={btn.url}
                >
                  {btn.label}
                </CmsButtonLink>
              ))}
            </Stack>
          </Stack>
          <Stack
            w="full"
            direction="row"
            justifyContent="flex-end"
            spacing={12}
            margin="auto"
          >
            {heroSection.guildStats.map((stat) => (
              <VStack spacing={2} maxW="120px" key={stat.value}>
                <H2
                  bgGradient="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
                  bgClip="text"
                  fontWeight="extrabold"
                >
                  {stat.value}
                </H2>
                <BodyMd align="center" color="gray.500">
                  {stat.label}
                </BodyMd>
              </VStack>
            ))}
          </Stack>
        </ResponsiveStack>
      </Box>
    </PageSection>
  )
}

export default GuildsSection
