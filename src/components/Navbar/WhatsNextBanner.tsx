import {
  Alert,
  Box,
  Text,
  CloseButton,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react"
import { FC } from "react"
import { HiOutlineExternalLink } from "react-icons/all"

const WhatsNextBanner: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Alert
      bg="brand.700"
      color="brand.100"
      justifyContent="center"
      position="relative"
    >
      <Stack direction={{ base: "column", lg: "row" }} pr={8}>
        <Text>
          The Threshold DAO is looking for delegates! Find out how to get
          involved on the Forum:
        </Text>
        <Box>
          <Link
            ml="5px"
            textDecoration="underline"
            href="https://forum.threshold.network/t/threshold-dao-delegates/325"
          >
            Learn More
          </Link>
          <Icon ml="5px" as={HiOutlineExternalLink} />
        </Box>
      </Stack>
      <CloseButton position="absolute" right="10px" onClick={onClose} />
    </Alert>
  )
}

export default WhatsNextBanner
