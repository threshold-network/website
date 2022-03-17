import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, HStack, Icon, Link, Stack } from "@chakra-ui/react"
import NewsletterSubscribe from "./NewsletterSubscribe"
import { PageSection } from "../PageSection"
import ThresholdBrand from "../ThresholdBrand"
import SocialMediaLinks from "./SocialMediaLinks"
import { BodySm, LabelMd } from "../Typography"
import { FiArrowUpRight } from "react-icons/all"
import { ExternalLinkHref, InternalLinkHref } from "../Navbar/types"

interface FooterLink {
  title: string
  links: {
    text: string
    href: InternalLinkHref | ExternalLinkHref | string
    isExternal?: boolean
  }[]
}

const footerLinks: FooterLink[] = [
  {
    title: "General",
    links: [
      {
        text: "Dapp",
        href: ExternalLinkHref.DAPP,
        isExternal: true,
      },
      {
        text: "Press",
        href: InternalLinkHref.PRESS,
      },
      {
        text: "Roadmap",
        href: ExternalLinkHref.ROADMAP,
        isExternal: true,
      },
      {
        text: "Blog",
        href: ExternalLinkHref.THRESHOLD_BLOG,
        isExternal: true,
      },
    ],
  },
  {
    title: "Earn",
    links: [
      {
        text: "Staker",
        href: InternalLinkHref.STAKER_ROLE,
      },
      {
        text: "Liquidity Provider",
        href: InternalLinkHref.LP_ROLE,
      },
      {
        text: "BTC / tBTC User",
        href: InternalLinkHref.BTC_ROLE,
      },
      {
        text: "Token Holder",
        href: InternalLinkHref.TOKEN_HOLDER_ROLE,
      },
      {
        text: "Earn Profile Quiz",
        // TODO: does this open the quiz modal? Or is the quiz on a separate page?
        href: "/somewhere",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        text: "Governance",
        href: InternalLinkHref.GOVERNANCE,
      },
      {
        text: "Discord",
        href: ExternalLinkHref.THRESHOLD_DISCORD,
        isExternal: true,
      },
      {
        text: "Forum",
        href: ExternalLinkHref.FORUM,
        isExternal: true,
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        text: "Contributors",
        href: InternalLinkHref.CONTRIBUTORS,
      },
      {
        text: "FAQ",
        href: InternalLinkHref.FAQ,
      },
      {
        text: "Audits",
        href: InternalLinkHref.AUDITS,
      },
    ],
  },
]

const FooterContent = () => {
  return (
    <PageSection bg="gray.900">
      <Stack
        direction="row"
        justifyContent={{ base: "center", md: "space-between" }}
        spacing={{ base: 12, lg: 24 }}
        w="full"
      >
        <Box>
          <ThresholdBrand display={{ base: "none", md: "block" }} p={0} />
          <Stack mt={{ base: 0, md: 28 }} spacing={{ base: 12, md: 6 }}>
            <SocialMediaLinks />
            <ThresholdBrand
              display={{ base: "block", md: "none" }}
              justifyContent="center"
              p={0}
            />
            <Stack>
              <BodySm
                textAlign={{ base: "center", md: "left" }}
                color="gray.300"
              >
                ©2021 | A Thesis Build
              </BodySm>
              <BodySm
                textAlign={{ base: "center", md: "left" }}
                color="gray.300"
              >
                All Rights Reserved
              </BodySm>
            </Stack>
          </Stack>
        </Box>
        <HStack
          spacing={4}
          justifyContent="space-between"
          w="full"
          display={{ base: "none", md: "flex" }}
        >
          {footerLinks.map((info) => {
            return (
              <Stack alignSelf="baseline" spacing={2} key={info.title}>
                <LabelMd textTransform="uppercase">{info.title}</LabelMd>
                {info.links.map((link) => (
                  <Link
                    key={link.href}
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
