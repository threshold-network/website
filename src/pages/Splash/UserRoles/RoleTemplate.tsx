import React, { FC } from "react"
import {
  Box,
  Button,
  ButtonProps,
  Container,
  Image,
  Stack,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { H2, H5, Label1 } from "../../../components/Typography"
import ExternalButtonLink from "../../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"

interface FooterButton extends ButtonProps {
  text: string
  href?: ExternalLinkHref
  to?: string
  onClick?: () => void
}

interface Props {
  bgColor: string
  title: string
  description: string
  footerButtons: FooterButton[]
  imgSrc: any
  rowReverse?: boolean
}

const RoleTemplate: FC<Props> = ({
  bgColor,
  title,
  description,
  footerButtons,
  imgSrc,
  rowReverse,
}) => {
  return (
    <Box bg={bgColor} py={{ base: "80px", lg: "150px" }}>
      <Container maxW="8xl" paddingY={12} px={{ base: 8, md: 16 }}>
        <Stack
          direction={{
            base: "column-reverse",
            lg: rowReverse ? "row-reverse" : "row",
          }}
          justifyContent="space-around"
        >
          <Box maxW="500px" margin={{ base: "auto", lg: 0 }}>
            <Label1 textTransform="uppercase" color="gray.500">
              Get Started
            </Label1>
            <H2 mt="12px">{title}</H2>
            <H5 mt="40px">{description}</H5>
            <Stack
              mt="40px"
              direction={{ base: "column", lg: "row" }}
              spacing={8}
            >
              {footerButtons.map(({ href, text, to, ...props }) => {
                if (href) {
                  return (
                    <ExternalButtonLink key={text} href={href} {...props}>
                      {text}
                    </ExternalButtonLink>
                  )
                }

                if (to) {
                  return (
                    <Button to={to} key={text} as={Link} {...props}>
                      {text}
                    </Button>
                  )
                }

                return (
                  <Button key={text} {...props}>
                    {text}
                  </Button>
                )
              })}
            </Stack>
          </Box>
          <Image
            w="350px"
            h="250px"
            mx={{ base: "auto !important", lg: "0 !important" }}
            mb={{ base: "80px", lg: 0 }}
            src={imgSrc}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default RoleTemplate
