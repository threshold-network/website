import React, { FC } from "react"
import { Box, Radio, RadioGroup, VStack } from "@chakra-ui/react"
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
      <Radio value={label} size="md" w="100%" p={4}>
        <BodyLg>{label}</BodyLg>
      </Radio>
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
      <VStack align="self-start">
        {stage.options.map((option) => (
          <QuizRadio
            isActive={value === option.label}
            key={option.label}
            {...option}
          />
        ))}
      </VStack>
    </RadioGroup>
  )
}

export default QuizRadioGroup
