import React, { FC, useMemo, useState } from "react"
import { Box } from "@chakra-ui/react"
import QuizControls from "./QuizControls"
import { H5 } from "../../components/Typography"
import { GoBack, GoForward, QuizOption, QuizStageData, Result } from "./types"
import QuizRadioGroup from "./QuizRadio"
import DefiAccordion from "./DefiAccordion"

const QuizStage: FC<{
  stage: QuizStageData
  goForward: GoForward
  goBack: GoBack
  shouldDisplayBackButton: boolean
}> = ({ stage, goBack, goForward, shouldDisplayBackButton }) => {
  const [value, setValue] = useState("")

  const selectedOption: QuizOption = useMemo(
    () => stage.options.find((option) => option.label === value) as QuizOption,
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
        shouldDisplayBackButton={shouldDisplayBackButton}
        selectedOption={selectedOption}
        goForward={goForwardAndClearSelectedOption}
        goBack={goBack}
      />
      {stage.includeAccordion && <DefiAccordion />}
    </Box>
  )
}

export default QuizStage
