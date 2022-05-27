import { FC } from "react"
import {
  LightMode,
  ProgressProps,
  Progress as ChakraProgress,
} from "@chakra-ui/react"

const Progress: FC<ProgressProps> = (props) => {
  return (
    <LightMode>
      <ChakraProgress {...props} />
    </LightMode>
  )
}

export default Progress
