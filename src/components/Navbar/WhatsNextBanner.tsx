import { Alert, CloseButton, Icon, Link } from "@chakra-ui/react"
import { FC } from "react"
import { HiOutlineExternalLink } from "react-icons/all"

const WhatsNextBanner: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Alert
      bg="purple.700"
      color="white"
      justifyContent="center"
      position="relative"
    >
      Find out what's next...
      <Link ml="5px" textDecoration="underline">
        Learn More
      </Link>
      <Icon ml="5px" as={HiOutlineExternalLink} />
      <CloseButton position="absolute" right="10px" onClick={onClose} />
    </Alert>
  )
}

export default WhatsNextBanner
