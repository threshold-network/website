import React from "react"
import { Box, Button, Stack } from "@chakra-ui/react"
import DigitalPatternBox from "../../../components/DigitalPatternBox"
import { H3, H5 } from "../../../components/Typography"
import RolesTabs from "./RolesTabs"

const RoleForEveryoneCard = () => {
  return (
    <Box margin="auto" maxW="1040px" width={{ base: "100%", md: "90%" }}>
      <DigitalPatternBox
        variant="dark"
        borderRadius={{ base: 0, md: "8px 8px 0 0" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box>
            <H3>There's a role for everyone</H3>
            <H5 color="gray.300" maxW="470px" mt={4}>
              Take this brief quiz and see which Threshold opportunity fits you
              best.
            </H5>
          </Box>
          <Button
            margin={{
              base: "24px 0 0 0 !important",
              md: "auto 0 !important",
            }}
            variant="solid"
          >
            Take the quiz
          </Button>
        </Stack>
      </DigitalPatternBox>
      <RolesTabs />
    </Box>
  )
}

export default RoleForEveryoneCard
