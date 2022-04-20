import { ResponsiveStack } from "../../../components/PageSection"
import { FC } from "react"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"
import {
  BodyLg,
  BodyMd,
  BodySm,
  H2,
  H3,
  Image,
  ImageProps,
} from "../../../components"
import {
  Avatar,
  AvatarGroup,
  Box,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import Card from "../../../components/Card"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"

interface GuildCard {
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
        {cards.map((card) => (
          <Card key={card.title}>
            <Stack h="full" spacing={8} justifyContent="space-between">
              <Box>
                <BodyLg color="gray.50" mb={4}>
                  {card.title}
                </BodyLg>
                <BodySm color="gray.100">{card.description}</BodySm>
              </Box>
              <AvatarGroup max={maxAvatarCount}>
                {card.memberAvatars.map((avatar) => (
                  <Avatar
                    bg="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
                    color="white"
                    name={avatar.memberName}
                    src={
                      // @ts-ignore
                      avatar?.image?.childImageSharp?.gatsbyImageData?.images
                        ?.fallback?.src
                    }
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
