import React, { FC } from "react"
import { Box, BoxProps, Container, Stack, StackProps } from "@chakra-ui/react"
import { Image } from "../components/Image"
import useChakraBreakpoint from "../hooks/useChakraBreakpoint"
import { ImageProps } from "./Image"

export interface SectionImageProps {
  imageProps: ImageProps
  isImageBackground?: boolean
}

export const PageSection: FC<
  BoxProps & { withSmallPadding?: boolean; withMediumPadding?: boolean }
> = ({ withSmallPadding, withMediumPadding, children, ...props }) => {
  return (
    <Box
      py={
        withSmallPadding
          ? { base: 8, md: 16 }
          : withMediumPadding
          ? { base: 14, md: 28 }
          : { base: 20, md: 40 }
      }
      as="section"
      {...props}
    >
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

export const SectionImage: FC<SectionImageProps> = ({
  imageProps,
  isImageBackground,
}) => {
  const mdSize = useChakraBreakpoint("md")

  return (
    <Box
      display="flex"
      justifyContent="center"
      maxW="415px"
      maxH="300px"
      mx={mdSize ? "auto !important" : undefined}
    >
      <Image
        position={isImageBackground ? "absolute" : undefined}
        {...imageProps}
      />
    </Box>
  )
}

export const SectionTextContainer: FC<BoxProps> = ({ children, ...props }) => {
  return <Box maxW={{ base: "100%", md: "512px" }}>{children}</Box>
}
