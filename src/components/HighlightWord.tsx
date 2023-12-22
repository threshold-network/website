import React, { FC } from "react"
import { BoxProps, Text } from "@chakra-ui/react"

export interface HighlightWordProps extends BoxProps {
  title: string
  highlightedWord?: string
}

export const HighlightWord: FC<HighlightWordProps> = ({
  title,
  highlightedWord,
  ...highlightedWordProps
}) => {
  const splittedTitle = title.split(highlightedWord || "")
  return (
    <>
      {splittedTitle.map((item, index) => (
        <React.Fragment key={`text-${index}`}>
          {item}
          {index !== splittedTitle.length - 1 && highlightedWord && (
            <Text as="span" bgClip="text" key={index} {...highlightedWordProps}>
              {highlightedWord}
            </Text>
          )}
        </React.Fragment>
      ))}
    </>
  )
}
