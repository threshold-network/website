import { FC } from "react"
import { Stack } from "@chakra-ui/react"
import { PageSection } from "../../../components/PageSection"
import GuildHero, { GuildHeroProps } from "./GuildHero"
import GuildCards, { GuildCard } from "./GuildCards"

interface GuildsSectionProps {
  heroSection: GuildHeroProps
  guildCards: GuildCard[]
}

const GuildsSection: FC<GuildsSectionProps> = ({ heroSection, guildCards }) => {
  return (
    <PageSection bg="#151A20">
      <Stack spacing={12}>
        <GuildHero {...heroSection} />
        <GuildCards cards={guildCards} />
      </Stack>
    </PageSection>
  )
}

export default GuildsSection
