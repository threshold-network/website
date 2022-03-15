import React, { FC } from "react"
import {
  Box,
  BoxProps,
  Container,
  Image,
  ImageProps,
  Stack,
  StackProps,
} from "@chakra-ui/react"
import useChakraBreakpoint from "../hooks/useChakraBreakpoint"

export const PageSection: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box py={{ base: 20, md: 40 }} {...props}>
      <Container maxW="1040px">{children}</Container>
    </Box>
  )
}

export const ResponsiveRow: FC<StackProps & { rowReverse?: boolean }> = ({
  children,
  rowReverse,
  ...props
}) => {
  return (
    <Stack
      direction={{
        base: "column-reverse",
        md: rowReverse ? "row-reverse" : "row",
      }}
      justifyContent="space-between"
      {...props}
    >
      {children}
    </Stack>
  )
}

export const SectionImage: FC<ImageProps> = ({ src }) => {
  const mdSize = useChakraBreakpoint("md")

  return (
    <Image
      maxW="350px"
      maxH="250px"
      mx={mdSize ? "auto !important" : undefined}
      src={src}
    />
  )
}
