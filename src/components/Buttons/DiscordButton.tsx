import { FC } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import { FaTwitter, IoLogoDiscord, IoLogoGithub } from "react-icons/all"
import { ExternalLinkHref } from "../Navbar/types"

const DiscordButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      variant="outline"
      rel="noopener noreferrer"
      target="_blank"
      leftIcon={<IoLogoDiscord />}
      w={{ base: "100%", md: "fit-content" }}
      {...props}
      as="a"
      href={ExternalLinkHref.THRESHOLD_DISCORD}
    >
      Discord
    </Button>
  )
}

export default DiscordButton
