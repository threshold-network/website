import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Button"
import { Card } from "./Card"

const colors = {
  purple: {
    50: "#FCF9FF",
    100: "#D5C6FF",
    // 200
    300: "#9974FF",
    // 400
    500: "#7D00FF", // main Threshold brand color
    550: "#7C47EE", // main Threshold brand color - DARK MODE
    // 600
    700: "#4E2E99",
    800: "#3B257A",
    900: "#1C0758",
  },
}

const index = extendTheme({
  colors,
  components: {
    Button,
    Card,
  },
})

export default index
