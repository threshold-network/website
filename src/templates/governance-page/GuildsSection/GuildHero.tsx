import { FC } from "react"
import { Stack, VStack } from "@chakra-ui/react"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"
import { ResponsiveStack } from "../../../components/PageSection"
import { BodyLg, BodyMd, H2, H3 } from "../../../components"

export interface GuildHeroProps {
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
}

const GuildHero: FC<GuildHeroProps> = ({
  title,
  description,
  guildStats,
  buttons,
}) => {
  return (
    <ResponsiveStack spacing={8} columnReverse>
      <Stack w="full" spacing={8}>
        <H3 color="gray.50">{title}</H3>
        <BodyLg color="gray.300">{description}</BodyLg>
        <Stack mt={6} direction={{ base: "column", md: "row" }} spacing={8}>
          {buttons.map((btn) => (
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
        justifyContent={{ base: "center", md: "flex-end" }}
        spacing={12}
        margin="auto"
      >
        {guildStats.map((stat) => (
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
  )
}

export default GuildHero
