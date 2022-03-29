import React, { FC } from "react"
import { Box, BoxProps, Container, Stack, StackProps } from "@chakra-ui/react"
import { Image } from "../components/Image"
import useChakraBreakpoint from "../hooks/useChakraBreakpoint"
import { ImageProps } from "./Image"

export const PageSection: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box py={{ base: 20, md: 40 }} as="section" {...props}>
      <Container
        maxW={{
          base: "640px", // includues 16px padding on each side
          md: "960px",
          lg: "1072px",
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export const ResponsiveStack: FC<StackProps & { rowReverse?: boolean }> = ({
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

export const SectionImage: FC<ImageProps> = (imageProps) => {
  const mdSize = useChakraBreakpoint("md")

  return (
    <Box maxW="415px" maxH="300px" mx={mdSize ? "auto !important" : undefined}>
      <Image {...imageProps} />
    </Box>
  )
}

export const SectionTextContainer: FC<BoxProps> = ({ children, ...props }) => {
  return <Box maxW={{ base: "100%", md: "512px" }}>{children}</Box>
}
