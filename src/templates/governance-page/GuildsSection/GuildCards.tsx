import { FC } from "react"
import { BodyLg, BodySm, ImageProps } from "../../../components"
import {
  Avatar,
  AvatarGroup,
  Box,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react"
import Card from "../../../components/Card"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { withPrefix } from "gatsby"

export interface GuildCard {
  title: string
  description: string
  memberAvatars: {
    image: ImageProps
    memberName: string
  }[]
  joinUrl: string
}

export interface GuildCardsProps {
  cards: GuildCard[]
}

const GuildCards: FC<GuildCardsProps> = ({ cards }) => {
  const maxAvatarCount = useBreakpointValue({ base: 5, md: 9 })

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8}>
        {cards.map((card, i) => (
          <Card key={i}>
            <Stack h="full" spacing={8} justifyContent="space-between">
              <Box>
                <BodyLg color="gray.50" mb={4}>
                  {card.title}
                </BodyLg>
                <BodySm color="gray.100">{card.description}</BodySm>
              </Box>
              <AvatarGroup max={maxAvatarCount}>
                {card.memberAvatars.map((avatar, i) => (
                  <Avatar
                    key={i}
                    bg="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
                    color="white"
                    name={avatar.memberName}
                    src={withPrefix(`/images/${avatar?.image?.relativePath}`)}
                  />
                ))}
              </AvatarGroup>
              <ExternalButtonLink
                variant="link"
                href={card.joinUrl as ExternalLinkHref}
              >
                Join Guild
              </ExternalButtonLink>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default GuildCards
