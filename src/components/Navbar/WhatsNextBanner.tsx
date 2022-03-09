import { Alert, CloseButton } from "@chakra-ui/react"
import { FC } from "react"
import { ExternalLink } from "../Typography"
import { ExternalLinkHref } from "./types"

const WhatsNextBanner: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Alert
      bg="brand.500"
      color="white"
      justifyContent="center"
      position="relative"
    >
      Find out what's next...
      <ExternalLink
        containerProps={{ ml: "5px" }}
        href={ExternalLinkHref.THRESHOLD_BLOG}
      >
        Read the blog
      </ExternalLink>
      <CloseButton position="absolute" right="10px" onClick={onClose} />
    </Alert>
  )
}

export default WhatsNextBanner
