import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { Box, ChakraProvider, Container } from "@chakra-ui/react"
import theme from "../theme"
import { Navbar } from "./Navbar"
import Swoosh from "../static/images/Swoosh.svg"

export const AppLayoutWrapper: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        minHeight="100%"
        bg="linear-gradient(130.52deg, #7D00FF 0%, #7F00AC 100%)"
      >
        <Box
          backgroundImage={Swoosh}
          backgroundPosition="center"
          backgroundRepeat="repeat"
        >
          <Navbar />
          <Container maxW="6xl">{children}</Container>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
