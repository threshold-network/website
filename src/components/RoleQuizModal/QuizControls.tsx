import { Button, HStack } from "@chakra-ui/react"
import React, { FC } from "react"
import { GoBack, GoForward, QuizOption } from "./types"
import { FiArrowRight } from "react-icons/all"

interface Props {
  selectedOption: QuizOption
  goBack: GoBack
  goForward: GoForward
  displayBackButton?: boolean
}

const QuizControls: FC<Props> = ({
  selectedOption,
  goBack,
  goForward,
  displayBackButton,
}) => {
  return (
    <HStack>
      {displayBackButton && <Button onClick={goBack}>Back</Button>}
      <Button
        disabled={!selectedOption}
        onClick={() => {
          if (selectedOption) {
            goForward(selectedOption.result)
          }
        }}
        rightIcon={<FiArrowRight />}
      >
        Next
      </Button>
    </HStack>
  )
}

export default QuizControls
