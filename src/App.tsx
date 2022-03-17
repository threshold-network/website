import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import theme from "./theme"
import Navbar from "./components/Navbar"
import SplashPage from "./pages/Splash"
import AboutPage from "./pages/About"
import GovernancePage from "./pages/Governance"
import EarnPage from "./pages/Earn"
import PressPage from "./pages/Press"
import ContributorsPage from "./pages/Contributors"
import FaqPage from "./pages/FAQ"
import AuditsPage from "./pages/Audits"
import useDarkMode from "./hooks/useDarkMode"
import Footer from "./components/Footer"
import { InternalLinkHref } from "./components/Navbar/types"

const App = () => {
  useDarkMode()
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={InternalLinkHref.ROOT} component={SplashPage} />
        <Route exact path={InternalLinkHref.ABOUT} component={AboutPage} />
        <Route
          exact
          path={InternalLinkHref.GOVERNANCE}
          component={GovernancePage}
        />
        <Route path={`${InternalLinkHref.EARN}`} component={EarnPage} />
        <Route exact path={InternalLinkHref.PRESS} component={PressPage} />
        <Route
          exact
          path={InternalLinkHref.CONTRIBUTORS}
          component={ContributorsPage}
        />
        <Route exact path={InternalLinkHref.FAQ} component={FaqPage} />
        <Route exact path={InternalLinkHref.AUDITS} component={AuditsPage} />
      </Switch>
      <Footer />
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
