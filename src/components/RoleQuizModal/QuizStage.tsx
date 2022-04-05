import React, { FC, useMemo, useState } from "react"
import { Box } from "@chakra-ui/react"
import QuizControls from "./QuizControls"
import { H5 } from "../../components/Typography"
import { GoBack, GoForward, QuizOption, QuizStageData, Result } from "./types"
import QuizRadioGroup from "./QuizRadio"

const QuizStage: FC<{
  stage: QuizStageData
  goForward: GoForward
  goBack: GoBack
  displayBackButton: boolean
}> = ({ stage, goBack, goForward, displayBackButton }) => {
  const [value, setValue] = useState("")

  const selectedOption: QuizOption = useMemo(
    () => stage.options.filter((option) => option.label === value)[0],
    [value]
  )

  const goForwardAndClearSelectedOption = (result: Result) => {
    setValue("")
    goForward(result)
  }

  return (
    <Box>
      <H5>{stage.title}</H5>
      <QuizRadioGroup stage={stage} setValue={setValue} value={value} />
      <QuizControls
        displayBackButton={displayBackButton}
        selectedOption={selectedOption}
        goForward={goForwardAndClearSelectedOption}
        goBack={goBack}
      />
    </Box>
  )
}

export default QuizStage
