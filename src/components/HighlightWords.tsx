import React, { FC } from "react"
import { BoxProps, Text } from "@chakra-ui/react"

export interface HighlightWordsProps extends BoxProps {
  title: string
  highlighted?: string[]
}

export const HighlightWords: FC<HighlightWordsProps> = ({
  title,
  highlighted = [],
  ...boxProps
}) => {
  const words = title.split(/\s+/)

  return (
    <>
      {words.map((word, index) => {
        const isHighlighted = highlighted.includes(word)

        return (
          <React.Fragment key={`text-${index}`}>
            {isHighlighted ? (
              <Text as="span" bgClip="text" {...boxProps}>
                {word}
              </Text>
            ) : (
              word
            )}
            {index < words.length - 1 && " "}
          </React.Fragment>
        )
      })}
    </>
  )
}
