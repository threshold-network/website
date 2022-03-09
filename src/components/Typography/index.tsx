import { FC } from "react"
import {
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Link,
  LinkProps,
  Icon,
  HStack,
  StackProps,
} from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/all"
import { ExternalLinkHref } from "../Navbar/types"

export const Headline: FC<HeadingProps> = (props) => {
  return <Heading fontSize="7xl" {...props} />
}

export const H1: FC<TextProps> = (props) => {
  return (
    <Text
      as="h1"
      fontSize="60px"
      lineHeight="64px"
      fontWeight="700"
      {...props}
    />
  )
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
  return (
    <Text
      as="h5"
      fontWeight="500"
      fontSize="24px"
      lineHeight="32px"
      {...props}
    />
  )
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
      lineHeight="28px"
      letterSpacing="0.075em"
      {...props}
    />
  )
}

export const ExternalLink: FC<{
  href: ExternalLinkHref
  noUnderline?: boolean
  linkProps?: LinkProps
  containerProps?: StackProps
}> = ({ noUnderline, children, href, linkProps, containerProps }) => {
  return (
    <HStack
      borderBottom={noUnderline ? "none" : "1px solid white"}
      {...containerProps}
    >
      <Link
        target="_blank"
        _hover={{
          textDecoration: "none",
        }}
        href={href}
        {...linkProps}
      >
        {children}
      </Link>
      <Icon ml="5px" as={FiArrowUpRight} />
    </HStack>
  )
}
