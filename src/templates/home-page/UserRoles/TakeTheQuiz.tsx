import React, { FC } from "react"
import { Box } from "@chakra-ui/react"
import TakeTheQuizBanner from "../../../components/TakeTheQuizBanner"

const TakeTheQuiz: FC<{ topBgColor: string; bottomBgColor: string }> = ({
  topBgColor,
  bottomBgColor,
}) => {
  return (
    <Box position="relative">
      <Box
        display={{ base: "none", md: "block" }}
        bg={topBgColor}
        height="75px"
        w="100%"
      />
      <TakeTheQuizBanner
        position={{ base: "relative", md: "absolute" }}
        top={0}
        left={0}
        right={0}
      />
      <Box
        display={{ base: "none", md: "block" }}
        bg={bottomBgColor}
        height="75px"
        w="100%"
      />
    </Box>
  )
}

export default TakeTheQuiz
