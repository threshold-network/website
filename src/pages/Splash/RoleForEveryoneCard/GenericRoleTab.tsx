import React, { FC } from "react"
import { Image, Stack } from "@chakra-ui/react"
import { Body2 } from "../../../components/Typography"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import ExternalButtonLink from "../../../components/ExternalButtonLink"

interface FooterButton {
  href: ExternalLinkHref
  text: string
  variant: string
}

const GenericRoleTab: FC<{
  body: string
  footerButtons: FooterButton[]
  imgSrc: any
}> = ({ body, footerButtons, imgSrc }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="space-around"
      p={10}
      spacing={8}
    >
      <Image src={imgSrc} w={{ base: "300px", md: "auto" }} margin="auto" />
      <Stack spacing={8}>
        <Body2
          maxW={{ base: "auto", md: "445px" }}
          color="gray.300"
          margin="auto"
        >
          {body}
        </Body2>
        <Stack direction={{ base: "column", md: "row" }} spacing={8}>
          {footerButtons.map((button) => (
            <ExternalButtonLink variant={button.variant} href={button.href}>
              {button.text}
            </ExternalButtonLink>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default GenericRoleTab
