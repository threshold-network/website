export const Button = {
  baseStyle: {
    padding: "20px 40px",
    borderRadius: 0,
  },
  variants: {
    solid: {
      color: "purple.700",
      bg: "white",
      boxShadow: "md",
      _hover: {
        bg: "purple.100",
      },
      _active: {
        bg: "purple.100",
      },
    },
    outline: {
      color: "white",
      bg: "blackAlpha.300",
      borderColor: "purple.300",
      border: "1px solid",
      _hover: {
        bg: "blackAlpha.400",
      },
      _active: {
        bg: "blackAlpha.400",
      },
    },
  },
}
