import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Button } from "./Button"
import { Card } from "./Card"
import { Progress } from "./Progress"
import { StatBox } from "./StatBox"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "70em",
  xl: "80em",
  "2xl": "96em",
})

const colors = {
  brand: {
    50: "#FCF9FF",
    100: "#D5C6FF",
    200: "#9974FF", // duplicate of 300
    300: "#9974FF",
    400: "#7C47EE", // duplicate of 500
    500: "#7C47EE", // main Threshold brand color - DARK MODE
    600: "#4E2E99", // duplicate of 700
    700: "#4E2E99",
    800: "#3B257A",
    900: "#1C0758",
  },
  purple: {
    50: "#FCF9FF",
    100: "#D5C6FF",
    // 200
    300: "#9974FF",
    // 400
    500: "#7C47EE", // main Threshold brand color - DARK MODE
    700: "#4E2E99",
    800: "#3B257A",
    900: "#1C0758",
  },
  gray: {
    300: "#B1BCCC",
    700: "#4A5568",
    800: "#323A47",
    900: "#1D2229",
  },
}

const theme = extendTheme({
  config,
  breakpoints,
  colors,
  textStyles: {
    buttonLg: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "28px",
      h: "auto",
      px: 6,
      py: 3,
    },
  },
  components: {
    Button,
    Card,
    Progress,
    StatBox,
    Input: {
      baseStyle: {
        field: {
          bg: "white",
          color: "gray.700",
          borderColor: "gray.300",
          _hover: {
            borderColor: "gray.500",
          },
          ":focus": {
            borderColor: "#7C47EE !important",
            boxShadow: "0 0 0 1px #7C47EE !important",
          },
          _placeholder: { opacity: 1, color: "gray.500" },
        },
      },
    },
  },
  styles: {
    global: {
      a: {
        // To style the `a` tag from cms we assume that these tags don't include
        // `class` attribute.
        ":not([class])": {
          textDecoration: "underline !important",
          // Add an arrow if it is an external link.
          '&[href^="http"]::after': {
            content: '" ↗"',
            whiteSpace: "pre",
          },
        },
      },
    },
  },
})

export default theme
