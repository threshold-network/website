export const Button = {
  baseStyle: {
    borderRadius: "6px",
  },
  variants: {
    special: {
      color: "white",
      paddingX: "40px",
      paddingY: "20px",
      background: "linear-gradient(to bottom left, #BD30FF 0%, #7D00FF 100%)",
      boxShadow: "md",
      _hover: {
        background: "brand.700",
      },
      _active: {
        background: "brand.800",
      },
    },
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
