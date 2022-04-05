import React, { FC } from "react"
import { HStack, Radio, RadioGroup } from "@chakra-ui/react"
import { Body2 } from "../../components/Typography"
import { QuizOption, QuizStageData } from "./types"

const QuizRadio: FC<QuizOption> = ({ text }) => {
  return (
    <HStack>
      <Body2>{text}</Body2>
      <Radio value={text} size="md" />
    </HStack>
  )
}

const QuizRadioGroup: FC<{
  setValue: (val: string) => void
  value: string
  stage: QuizStageData
}> = ({ value, setValue, stage }) => {
  return (
    <RadioGroup onChange={setValue} value={value}>
      {stage.options.map((option) => (
        <QuizRadio key={option.text} {...option} />
      ))}
    </RadioGroup>
  )
}

export default QuizRadioGroup
