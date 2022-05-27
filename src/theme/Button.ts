export const Button = {
  baseStyle: {
    borderRadius: "6px",
    width: { base: "auto", md: "fit-content" },
  },
  variants: {
    special: {
      color: "white",
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
      color: "white",
      bg: "brand.500",
      boxShadow: "md",
      _hover: {
        bg: "brand.700",
      },
      _active: {
        bg: "brand.800",
      },
    },
    outline: {
      color: "white",
      bg: "transparent",
      borderColor: "white",
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
