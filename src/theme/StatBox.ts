export const StatBox = {
  baseStyle: {
    stack: {
      background: "gray.800",
      padding: 8,
      borderRadius: "md",
    },
    mainText: {},
    secondaryText: {
      color: "gray.500",
    },
  },
  variants: {
    primary: {},
    secondary: {
      stack: {
        backgroundColor: "#181D23",
        border: "1px solid",
        borderColor: "gray.700",
      },
      mainText: {
        color: "gray.50",
      },
      secondaryText: {
        color: "gray.300",
      },
    },
  },
}
