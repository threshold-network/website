import { FC } from "react"
import { HStack, Image } from "@chakra-ui/react"
import Threshold from "../../static/images/ThresholdBrandFullWhite.svg"

const ThresholdBrand: FC = () => {
  return (
    <HStack
      px={8}
      minW={{ base: "160px", md: "264px" }}
      width={{ base: "100%", md: "auto" }}
    >
      <Image src={Threshold} h="18px" />
    </HStack>
  )
}

export default ThresholdBrand
