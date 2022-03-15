import React, { FC } from "react"
import { Box, BoxProps, Container } from "@chakra-ui/react"

const PageSection: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box py={{ base: 20, md: 40 }} {...props}>
      <Container maxW="8xl">{children}</Container>
    </Box>
  )
}

export default PageSection
