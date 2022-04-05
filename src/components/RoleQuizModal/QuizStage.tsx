import React, { FC, useMemo, useState } from "react"
import { Box, RadioGroup } from "@chakra-ui/react"
import QuizRadio from "./QuizRadio"
import QuizControls from "./QuizControls"
import { Body3 } from "../../components/Typography"
import { GoBack, GoForward, QuizOption, QuizStageData } from "./types"
import QuizRadioGroup from "./QuizRadio"

const QuizStage: FC<{
  stage: QuizStageData
  goForward: GoForward
  goBack: GoBack
}> = ({ stage, goBack, goForward }) => {
  const [value, setValue] = useState("")

  const selectedOption: QuizOption = useMemo(
    () => stage.options.filter((option) => option.text === value)[0],
    [value]
  )

  return (
    <Box>
      <Body3>{stage.title}</Body3>
      <QuizRadioGroup stage={stage} setValue={setValue} value={value} />
      <QuizControls
        selectedOption={selectedOption}
        goForward={goForward}
        goBack={goBack}
      />
    </Box>
  )
}

export default QuizStage
