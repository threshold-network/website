import { FC } from "react"
import {
  Text,
  TextProps,
  Link,
  Icon,
  HStack,
  StackProps,
} from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/all"
import { ExternalLinkHref } from "../Navbar/types"
import { LinkProps } from "react-router-dom"

export const H1: FC<TextProps> = (props) => {
  return (
    <Text
      as="h1"
      fontWeight="700"
      fontSize={{ base: "48px", md: "60px" }}
      lineHeight={{ base: "52px", md: "64px" }}
      {...props}
    />
  )
}

export const H2: FC<TextProps> = (props) => {
  return (
    <Text
      as="h2"
      fontSize={{ base: "40px", md: "48px" }}
      lineHeight={{ base: "46px", md: "52px" }}
      fontWeight={600}
      {...props}
    />
  )
}

export const H3: FC<TextProps> = (props) => {
  return (
    <Text
      as="h3"
      fontSize={{
        base: "32px",
        md: "36px",
      }}
      lineHeight={{ base: "38px", md: "40px" }}
      {...props}
    />
  )
}

export const H4: FC<TextProps> = (props) => {
  return (
    <Text
      as="h4"
      fontSize={{ base: "28px", md: "30px" }}
      lineHeight={{ base: "34px", md: "38px" }}
      {...props}
    />
  )
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

export const H6: FC<TextProps> = (props) => {
  return (
    <Text
      as="h6"
      fontWeight="500"
      fontSize="18px"
      lineHeight="28px"
      {...props}
    />
  )
}

export const BodyLg: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="18px" lineHeight="28px" {...props} />
}

export const BodyMd: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="16px" lineHeight="24px" {...props} />
}

export const BodySm: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="14px" lineHeight="20px" {...props} />
}

export const BodyXs: FC<TextProps> = (props) => {
  return <Text as="p" fontSize="12px" lineHeight="16px" {...props} />
}

export const LabelLg: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight={600}
      fontSize="20px"
      lineHeight="28px"
      letterSpacing="0.075em"
      {...props}
    />
  )
}

export const LabelMd: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight={600}
      fontSize="16px"
      lineHeight="24px"
      letterSpacing="0.075em"
      {...props}
    />
  )
}

export const LabelSm: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight={600}
      fontSize="14px"
      lineHeight="16px"
      letterSpacing="0.075em"
      {...props}
    />
  )
}

export const LabelXs: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight={600}
      fontSize="10px"
      lineHeight="12px"
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

export const ButtonLg: FC<TextProps> = (props) => {
  return <Text fontWeight={600} fontSize="18px" lineHeight="28px" {...props} />
}
