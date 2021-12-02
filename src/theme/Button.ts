export const Button = {
  baseStyle: {
    borderRadius: 0,
  },
  variants: {
    solid: {
      color: "brand.700",
      bg: "white",
      boxShadow: "md",
      _hover: {
        bg: "brand.100",
      },
      _active: {
        bg: "brand.100",
      },
    },
    outline: {
      color: "white",
      bg: "blackAlpha.300",
      borderColor: "brand.300",
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
