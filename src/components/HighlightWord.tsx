import React, { FC } from "react"
import { Box, BoxProps, Text } from "@chakra-ui/react"

export interface HighlightWordProps extends BoxProps {
  title: string
  highlightedWord: string
}

export const HighlightWord: FC<HighlightWordProps> = ({
  title,
  highlightedWord,
  ...highlightedWordProps
}) => {
  const titleSplittedByHighlightedWord = title.split(highlightedWord!)
  return (
    <>
      {titleSplittedByHighlightedWord.map((item, index) => (
        <React.Fragment key={`text-${index}`}>
          {item}
          {index !== titleSplittedByHighlightedWord.length - 1 && (
            <Text as="span" bgClip="text" key={index} {...highlightedWordProps}>
              {highlightedWord}
            </Text>
          )}
        </React.Fragment>
      ))}
    </>
  )
}
