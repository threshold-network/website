import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { Navbar } from "./Navbar"
import useDarkMode from "../hooks/useDarkMode"
import Footer from "./Footer"
import { QuizModalContextProvider } from "../contexts/QuizModalContext"
import RoleQuizModal from "./RoleQuizModal"

const App: FC = ({ children }) => {
  useDarkMode()
  return (
    <QuizModalContextProvider>
      <Box minHeight="100%">
        <Box as="main">
          <RoleQuizModal />
          <Navbar />
          {children}
          <Footer />
        </Box>
      </Box>
    </QuizModalContextProvider>
  )
}

export const AppLayoutWrapper: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <App>{children}</App>
    </ChakraProvider>
  )
}
