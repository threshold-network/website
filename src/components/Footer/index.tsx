import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, HStack, Stack, Icon, Link } from "@chakra-ui/react"
import NewsletterSubscribe from "./NewsletterSubscribe"
import { PageSection } from "../PageSection"
import ThresholdBrand from "../ThresholdBrand"
import SocialMediaLinks from "./SocialMediaLinks"
import { BodySm, LabelMd } from "../Typography"
import { FiArrowUpRight } from "react-icons/all"

const footerLinks = [
  {
    title: "General",
    links: [
      {
        text: "Dapp",
        href: "/somewhere",
        isExternal: true,
      },
      {
        text: "Press",
        href: "/somewhere",
      },
      {
        text: "Roadmap",
        href: "/somewhere",
        isExternal: true,
      },
      {
        text: "Blog",
        href: "/somewhere",
        isExternal: true,
      },
    ],
  },
  {
    title: "Earn",
    links: [
      {
        text: "Staker",
        href: "/somewhere",
      },
      {
        text: "Liquidity Provider",
        href: "/somewhere",
      },
      {
        text: "BTC / tBTC User",
        href: "/somewhere",
      },
      {
        text: "Token Holder",
        href: "/somewhere",
      },
      {
        text: "Earn Profile Quiz",
        href: "/somewhere",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        text: "Governance",
        href: "/somewhere",
      },
      {
        text: "Discord",
        href: "/somewhere",
        isExternal: true,
      },
      {
        text: "Forum",
        href: "/somewhere",
        isExternal: true,
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        text: "Contributors",
        href: "/somewhere",
      },
      {
        text: "FAQ",
        href: "/somewhere",
      },
      {
        text: "Audits",
        href: "/somewhere",
      },
    ],
  },
]

const FooterContent = () => {
  return (
    <PageSection bg="gray.900">
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={{ base: 12, lg: 24 }}
      >
        <Box>
          <ThresholdBrand />
          <Stack mt={28} spacing={6}>
            <SocialMediaLinks />
            <Stack>
              <BodySm color="gray.300">©2021 | A Thesis Build</BodySm>
              <BodySm color="gray.300">All Rights Reserved</BodySm>
            </Stack>
          </Stack>
        </Box>
        <HStack spacing={4} justifyContent="space-between" w="full">
          {footerLinks.map((info) => {
            return (
              <Stack alignSelf="baseline" spacing={2}>
                <LabelMd textTransform="uppercase">{info.title}</LabelMd>
                {info.links.map((link) => (
                  <Link
                    display="flex"
                    as={link.isExternal ? undefined : RouterLink}
                    to={link.href}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                  >
                    <BodySm color="gray.300">{link.text}</BodySm>
                    {link.isExternal && (
                      <Icon ml={1} color="gray.300" as={FiArrowUpRight} />
                    )}
                  </Link>
                ))}
              </Stack>
            )
          })}
        </HStack>
      </Stack>
    </PageSection>
  )
}

const Footer = () => {
  return (
    <Box>
      <NewsletterSubscribe />
      <FooterContent />
    </Box>
  )
}

export default Footer
