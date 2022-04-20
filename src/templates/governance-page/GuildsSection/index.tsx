import { FC } from "react"
import { Stack } from "@chakra-ui/react"
import { PageSection } from "../../../components/PageSection"
import GuildHero, { GuildHeroProps } from "./GuildHero"
import GuildCards, { GuildCardsProps } from "./GuildCards"

interface GuildsSectionProps {
  heroSection: GuildHeroProps
  GuildCards: GuildCardsProps
}

const GuildsSection: FC<GuildsSectionProps> = ({ heroSection, guildCards }) => {
  return (
    <PageSection bg="blackAlpha.400">
      <Stack spacing={12}>
        <GuildHero {...heroSection} />
        <GuildCards cards={guildCards} />
      </Stack>
    </PageSection>
  )
}

export default GuildsSection
