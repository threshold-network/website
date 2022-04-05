import { Button, HStack } from "@chakra-ui/react"
import React, { FC } from "react"
import { GoBack, GoForward, QuizOption } from "./types"

interface Props {
  selectedOption: QuizOption
  goBack: GoBack
  goForward: GoForward
}

const QuizControls: FC<Props> = ({ selectedOption, goBack, goForward }) => {
  console.log("quiz control ", selectedOption)
  return (
    <HStack>
      <Button onClick={goBack}>Back</Button>
      <Button
        onClick={() => {
          if (selectedOption) {
            goForward(selectedOption.result)
          }
        }}
      >
        Continue
      </Button>
    </HStack>
  )
}

export default QuizControls
