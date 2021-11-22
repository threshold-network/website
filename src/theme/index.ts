import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Button"
import { Card } from "./Card"

const colors = {}

const index = extendTheme({
  colors,
  components: {
    Button,
    Card,
  },
})

export default index
