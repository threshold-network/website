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
    >
      {socialMediaLinks.map(({ href, logo }) => (
        <Link key={href} href={href} target="_blank" rel="noreferrer">
          <Icon
            boxSize="25px"
            color="brand.100"
            _hover={{ color: "white" }}
            as={logo}
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks
