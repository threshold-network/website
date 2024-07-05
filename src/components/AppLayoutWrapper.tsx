import "focus-visible/dist/focus-visible"
import { FC } from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { Navbar } from "./Navbar"
import useDarkMode from "../hooks/useDarkMode"
import Footer from "./Footer"
import { SEO } from "./SEO"
import { QuizModalContextProvider } from "../contexts/QuizModalContext"
import RoleQuizModal from "./RoleQuizModal"
import { TokenPriceContextProvider } from "../contexts/TokenPriceContext"
import { useGoogleTagManager } from "../hooks/useGoogleTagManager"

const App: FC = ({ children }) => {
  useDarkMode()
  const gatsbyGtmId = process.env.GATSBY_GTM_ID
  const subgraphApiKey = process.env.SUBGRAPH_API_KEY
  useGoogleTagManager(subgraphApiKey)
  return (
    <TokenPriceContextProvider>
      <QuizModalContextProvider>
        <Box minHeight="100%" fontFamily={"Inter"}>
          <Box as="main">
            <RoleQuizModal />
            <Navbar />
            {children}
            <Footer />
          </Box>
        </Box>
      </QuizModalContextProvider>
    </TokenPriceContextProvider>
  )
}

type AppLayoutWrapperProps = {
  pageContext: {
    seo: { title: string; description: string }
  }
}

export const AppLayoutWrapper: FC<AppLayoutWrapperProps> = ({
  pageContext,
  children,
}) => {
  const { seo } = pageContext

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <ChakraProvider theme={theme}>
        <App>{children}</App>
      </ChakraProvider>
    </>
  )
}
