import { FC } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import { IoLogoGithub } from "react-icons/all"
import { ExternalLinkHref } from "../Navbar/types"

const GithubButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      variant="outline"
      rel="noopener noreferrer"
      target="_blank"
      leftIcon={<IoLogoGithub />}
      {...props}
      as="a"
      href={ExternalLinkHref.THRESHOLD_GITHUB}
    >
      Github
    </Button>
  )
}

export default GithubButton
