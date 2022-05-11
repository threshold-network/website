import React, { FC } from "react"
import { Box, LightMode, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { BodyLg } from "../../components/Typography"
import { QuizOption, QuizStageData } from "./types"

const QuizRadio: FC<QuizOption & { isActive: boolean }> = ({
  label,
  isActive,
}) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.700"
      borderRadius="md"
      my={4}
      bg={isActive ? "blackAlpha.400" : undefined}
      w="100%"
    >
      <LightMode>
        <Radio colorScheme="brand" value={label} size="md" w="100%" p={4}>
          <BodyLg>{label}</BodyLg>
        </Radio>
      </LightMode>
    </Box>
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
          isActive={value === option.label}
          key={option.label}
          {...option}
        />
      ))}
    </RadioGroup>
  )
}

export default QuizRadioGroup
