import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { Navbar } from "./Navbar"
import Swoosh from "../static/images/Swoosh.svg"
import useDarkMode from "../hooks/useDarkMode"

const App: FC = ({ children }) => {
  useDarkMode()
  return (
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
        {children}
      </Box>
    </Box>
  )
}

export const AppLayoutWrapper: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <App>{children}</App>
    </ChakraProvider>
  )
}
