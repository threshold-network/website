import React, { FC } from "react"
import { HStack, Radio, RadioGroup } from "@chakra-ui/react"
import { BodyMd } from "../../components/Typography"
import { QuizOption, QuizStageData } from "./types"

const QuizRadio: FC<QuizOption> = ({ label }) => {
  return (
    <HStack>
      <BodyMd>{label}</BodyMd>
      <Radio value={label} size="md" />
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
        <QuizRadio key={option.label} {...option} />
      ))}
    </RadioGroup>
  )
}

export default QuizRadioGroup
