import { FC } from "react"
import { Heading, HeadingProps, Text, TextProps } from "@chakra-ui/react"

export const Headline: FC<HeadingProps> = (props) => {
  return <Heading fontSize="7xl" {...props} />
}

export const H1: FC<TextProps> = (props) => {
  return <Text as="h1" fontSize="6xl" lineHeight="64px" {...props} />
}

export const H2: FC<TextProps> = (props) => {
  return <Text as="h2" fontSize="5xl" lineHeight="48px" {...props} />
}

export const H3: FC<TextProps> = (props) => {
  return <Text as="h3" fontSize="4xl" lineHeight="40px" {...props} />
}

export const H4: FC<TextProps> = (props) => {
  return <Text as="h4" fontSize="3xl" lineHeight="38px" {...props} />
}

export const H5: FC<TextProps> = (props) => {
  return <Text as="h5" fontSize="2xl" lineHeigh="32px" {...props} />
}

export const Body1: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="lg" lineHeight="28px" {...props} />
}

export const Body2: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="md" lineHeight="24px" {...props} />
}

export const Body3: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="sm" lineHeight="20px" {...props} />
}

export const Label1: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight={600}
      fontSize="md"
      letterSpacing="7.5%"
      lineHeight="28px"
      {...props}
    />
  )
}
