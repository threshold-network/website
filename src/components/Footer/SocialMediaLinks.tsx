import { FC } from "react"
import { HStack, Icon, Link } from "@chakra-ui/react"
import { FaTwitter, IoLogoDiscord, IoLogoGithub } from "react-icons/all"
import { Telegram } from "../../static/icons/Telegram"
import { ExternalLinkHref } from "../Navbar/types"

const socialMediaLinks = [
  {
    href: ExternalLinkHref.THRESHOLD_TWITTER,
    logo: FaTwitter,
  },
  {
    href: ExternalLinkHref.TELEGRAM,
    logo: Telegram,
  },
  {
    href: ExternalLinkHref.THRESHOLD_DISCORD,
    logo: IoLogoDiscord,
  },
  {
    href: ExternalLinkHref.THRESHOLD_GITHUB,
    logo: IoLogoGithub,
  },
]

const SocialMediaLinks: FC<{ isMobileDrawerFooter?: boolean }> = () => {
  return (
    <HStack spacing={6} justifyContent={{ base: "center", md: "flex-start" }}>
      {socialMediaLinks.map(({ href, logo }) => (
        <Link key={href} href={href} target="_blank" rel="noreferrer">
          <Icon
            boxSize="25px"
            color="gray.300"
            _hover={{ color: "white" }}
            as={logo}
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks
