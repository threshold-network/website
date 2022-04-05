import React, { FC } from "react"
import { HStack, Radio, RadioGroup } from "@chakra-ui/react"
import { BodyLg } from "../../components/Typography"
import { QuizOption, QuizStageData } from "./types"

const QuizRadio: FC<QuizOption & { isActive: boolean; setValue: any }> = ({
  label,
  isActive,
  setValue,
}) => {
  return (
    <HStack
      onClick={() => setValue(label)}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.700"
      p={4}
      borderRadius="md"
      spacing={2}
      my={4}
      bg={isActive ? "blackAlpha.400" : undefined}
    >
      <Radio value={label} size="md" />
      <BodyLg>{label}</BodyLg>
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
        <QuizRadio
          setValue={setValue}
          isActive={value === option.label}
          key={option.label}
          {...option}
        />
      ))}
    </RadioGroup>
  )
}

export default QuizRadioGroup
