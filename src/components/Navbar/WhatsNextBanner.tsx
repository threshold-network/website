import { Alert, CloseButton, Icon, Link } from "@chakra-ui/react"
import { FC } from "react"
import { HiOutlineExternalLink } from "react-icons/all"
import { ExternalLink } from "./types"

const WhatsNextBanner: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Alert
      bg="brand.700"
      color="brand.100"
      justifyContent="center"
      position="relative"
    >
      Upgrade your NU & KEEP to T on the upgrade UI
      <Link
        ml="5px"
        textDecoration="underline"
        href={ExternalLink.TEMPORARY_UPGRADE_UI}
      >
        nucypher.network
      </Link>
      <Icon ml="5px" as={HiOutlineExternalLink} />
      <CloseButton position="absolute" right="10px" onClick={onClose} />
    </Alert>
  )
}

export default WhatsNextBanner
