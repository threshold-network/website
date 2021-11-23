import { FC } from "react"
import { HStack, Icon, Link } from "@chakra-ui/react"
import { IoLogoDiscord, IoLogoGithub, FaTwitter } from "react-icons/all"
import { ExternalLink } from "./types"

const SocialMediaLinks: FC<{ isMobileDrawerFooter?: boolean }> = ({
  isMobileDrawerFooter,
}) => {
  const socialMediaLinks = [
    {
      href: ExternalLink.THRESHOLD_TWITTER,
      logo: FaTwitter,
    },
    {
      href: ExternalLink.THRESHOLD_DISCORD,
      logo: IoLogoDiscord,
    },
    {
      href: ExternalLink.THRESHOLD_GITHUB,
      logo: IoLogoGithub,
    },
  ]

  return (
    <HStack
      spacing={6}
      px={8}
      display={{
        base: isMobileDrawerFooter ? "inherit" : "none",
        md: "inherit",
      }}
      justifyContent={{
        base: isMobileDrawerFooter ? "center" : "flex-end",
        md: "flex-start",
      }}
      borderLeft={{
        base: isMobileDrawerFooter ? "none" : "1px solid",
        md: "none",
      }}
      borderColor="purple.300"
    >
      {socialMediaLinks.map(({ href, logo }) => (
        <Link key={href} href={href} target="_blank">
          <Icon
            boxSize="25px"
            color="purple.100"
            _hover={{ color: "white" }}
            as={logo}
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks
