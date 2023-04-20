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
    primary: {
      stack: {
        backgroundColor: "gray.900",
      },
    },
    secondary: {
      stack: {
        backgroundColor: "blue.900",
        border: "1px solid",
        borderColor: "gray.700",
        paddingTop: 12,
        paddingBottom: 12,
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
