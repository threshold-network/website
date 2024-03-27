import { FC } from "react"
import { HStack, Image, Link, StackProps } from "@chakra-ui/react"
import Threshold from "../static/images/ThresholdBrandFullWhite.svg"

const ThresholdBrand: FC<{ isDrawerOpen?: boolean } & StackProps> = ({
  isDrawerOpen,
  ...props
}) => {
  return (
    <HStack
      w={{ xl: "100%" }}
      minW={{ base: "184px", xl: "225px" }}
      justifyContent={isDrawerOpen ? "center" : "end"}
      pr="32px"
      {...props}
    >
      <Link href="/">
        <Image src={Threshold} h="18px" />
      </Link>
    </HStack>
  )
}

export default ThresholdBrand
