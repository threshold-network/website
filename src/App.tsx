import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { Box, ChakraProvider, Container, Image } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import theme from "./theme"
import Navbar from "./components/Navbar"
import SplashPage from "./pages/Splash"
import Swoosh from "./static/images/Swoosh.svg"

const App: FC = () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <ChakraProvider theme={theme}>
        <Box
          w="100vw"
          h="100%"
          bg="linear-gradient(130.52deg, #7D00FF 0%, #7F00AC 100%)"
        >
          <Box backgroundImage={Swoosh} backgroundPosition="center">
            <Navbar />
            <Container maxW="6xl">
              <Switch>
                <Route exact path="/" component={SplashPage} />
              </Switch>
            </Container>
          </Box>
        </Box>
      </ChakraProvider>
    </Router>
  )
}

export default App
