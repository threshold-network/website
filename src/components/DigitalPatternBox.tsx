import { FC } from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import digitalPattern200 from "../static/images/Digital-Pattern-200.png"
import digitalPattern300 from "../static/images/Digital-Pattern-300.png"

const DigitalPatternBox: FC<BoxProps & { variant?: "light" | "dark" }> = ({
  variant = "light",
  children,
  ...props
}) => {
  return (
    <Box
      bg={variant === "light" ? "gray.700" : "gray.900"}
      backgroundImage={
        variant === "light" ? digitalPattern200 : digitalPattern300
      }
      padding={12}
      {...props}
    >
      {children}
    </Box>
  )
}

export default DigitalPatternBox
