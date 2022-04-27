import { FC } from "react"
import { HStack, ProgressProps } from "@chakra-ui/react"
import { BodySm } from "../../../components"
import Progress from "../../../components/Progress"

const ProgressWithPercentage: FC<ProgressProps> = (props) => {
  return (
    <HStack w="full">
      <Progress w="full" {...props} />
      <BodySm minW="40px" color="gray.500" textAlign="right">
        {props.value}%
      </BodySm>
    </HStack>
  )
}

export default ProgressWithPercentage
