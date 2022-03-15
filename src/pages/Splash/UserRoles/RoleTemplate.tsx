import React, { FC } from "react"
import { Box, BoxProps, Button, ButtonProps, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { H2, H5, LabelMd } from "../../../components/Typography"
import ExternalButtonLink from "../../../components/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import {
  PageSection,
  ResponsiveRow,
  SectionImage,
} from "../../../components/PageSection"

interface FooterButton extends ButtonProps {
  text: string
  href?: ExternalLinkHref
  to?: string
  onClick?: () => void
}

interface Props extends BoxProps {
  bgColor: string
  title: string
  description: string
  footerButtons: FooterButton[]
  imgSrc: any
  rowReverse?: boolean
}

const RoleTemplate: FC<Props> = ({
  title,
  description,
  footerButtons,
  imgSrc,
  rowReverse,
  ...boxProps
}) => {
  return (
    <PageSection {...boxProps}>
      <ResponsiveRow rowReverse={rowReverse} spacing={16}>
        <Box maxW={{ base: "100%", md: "509px" }}>
          <LabelMd textTransform="uppercase" color="gray.500">
            Get Started
          </LabelMd>
          <H2 mt={3}>{title}</H2>
          <H5 mt={10}>{description}</H5>
          <Stack mt={10} direction={{ base: "column", md: "row" }} spacing={8}>
            {footerButtons.map(({ href, text, to, ...props }) => {
              if (href) {
                return (
                  <ExternalButtonLink
                    key={text}
                    href={href}
                    w="auto"
                    {...props}
                  >
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
        <SectionImage src={imgSrc} />
      </ResponsiveRow>
    </PageSection>
  )
}

export default RoleTemplate
