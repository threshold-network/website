import { FC } from "react"
import { HStack, Icon, Link } from "@chakra-ui/react"
import { FaTwitter, IoLogoDiscord, IoLogoGithub } from "react-icons/all"
import { ExternalLinkHref } from "./types"
import { Telegram } from "../../static/icons/Telegram"

const SocialMediaLinks: FC<{ isMobileDrawerFooter?: boolean }> = ({
  isMobileDrawerFooter,
}) => {
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

  return (
    <HStack
      spacing={6}
      px={8}
      display={{
        base: isMobileDrawerFooter ? "inherit" : "none",
        lg: "inherit",
      }}
      justifyContent={{
        base: isMobileDrawerFooter ? "center" : "flex-end",
        lg: "flex-start",
      }}
      borderLeft={{
        base: isMobileDrawerFooter ? "none" : "1px solid",
        lg: "none",
      }}
      borderColor="brand.300"
      marginBottom={isMobileDrawerFooter ? 8 : undefined}
    >
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
