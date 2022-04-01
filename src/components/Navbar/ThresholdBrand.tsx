import { FC } from "react"
import { HStack, Image, Link } from "@chakra-ui/react"
import Threshold from "../../static/images/ThresholdBrandFullWhite.svg"

const ThresholdBrand: FC<{ isDrawerOpen?: boolean }> = ({ isDrawerOpen }) => {
  return (
    <HStack
      minW={{ base: "184px", lg: "200px" }}
      // width={{ base: "100%", lg: "auto" }}
      justifyContent={isDrawerOpen ? "center" : "flex-start"}
      pr="32px"
    >
      <Link href="/">
        <Image src={Threshold} h="18px" />
      </Link>
    </HStack>
  )
}

export default ThresholdBrand
