import { useEffect } from "react"
import { useColorMode } from "@chakra-ui/react"

const useDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode === "light") toggleColorMode()
  }, [colorMode, toggleColorMode])
}

export default useDarkMode
