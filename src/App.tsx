import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import theme from "./theme"
import Navbar from "./components/Navbar"
import SplashPage from "./pages/Splash"
import useDarkMode from "./hooks/useDarkMode"

const App = () => {
  useDarkMode()
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
      </Switch>
    </>
  )
}

const ProviderWrapper: FC = () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  )
}

export default ProviderWrapper
