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

export const ResponsiveStack: FC<
  StackProps & { rowReverse?: boolean; columnReverse?: boolean }
> = ({ children, rowReverse, columnReverse, ...props }) => {
  return (
    <Stack
      direction={{
        base: columnReverse ? "column" : "column-reverse",
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

export const SectionTextContainer: FC<BoxProps> = ({ children, ...props }) => {
  return <Box maxW={{ base: "100%", md: "512px" }}>{children}</Box>
}
