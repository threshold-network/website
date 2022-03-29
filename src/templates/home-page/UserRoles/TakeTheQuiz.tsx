import React, { FC } from "react"
import { Box, Button, Stack } from "@chakra-ui/react"
import DigitalPatternBox from "../../../components/DigitalPatternBox"
import { H5 } from "../../../components/Typography"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
import TakeTheQuizBanner from "../../../components/TakeTheQuizBanner"

const TakeTheQuiz: FC<{ topBgColor: string }> = ({ topBgColor }) => {
  const isMobile = useChakraBreakpoint("md")
  return (
    <Box position="relative">
      <Box
        display={{ base: "none", md: "block" }}
        bg={topBgColor}
        height="75px"
        w="100%"
      />
      {/*<DigitalPatternBox*/}
      {/*  variant="dark"*/}

      {/*  margin="auto"*/}
      {/*  h={{ base: "auto", md: "150px" }}*/}
      {/*  maxW="6xl"*/}
      {/*  w="100%"*/}
      {/*  borderRadius={{ base: 0, md: "6px" }}*/}
      {/*  boxShadow="0px 25px 50px -12px rgba(0, 0, 0, 0.25);"*/}
      {/*>*/}
      {/*  <Stack*/}
      {/*    justifyContent="space-around"*/}
      {/*    direction={{ base: "column", md: "row" }}*/}
      {/*    spacing={6}*/}
      {/*  >*/}
      {/*    <H5 color="gray.500" maxW="645px">*/}
      {/*      There’s a role for everyone. Take this brief quiz and see which*/}
      {/*      Threshold opportunity fits you best.*/}
      {/*    </H5>*/}
      {/*    <Button variant={isMobile ? "solid" : "outline"} minW="170px">*/}
      {/*      Take the quiz*/}
      {/*    </Button>*/}
      {/*  </Stack>*/}
      {/*</DigitalPatternBox>*/}
      <TakeTheQuizBanner
        position={{ base: "relative", md: "absolute" }}
        top={0}
        left={0}
        right={0}
      />
      <Box
        display={{ base: "none", md: "block" }}
        bg="gray.900"
        height="75px"
        w="100%"
      />
    </Box>
  )
}

export default TakeTheQuiz
