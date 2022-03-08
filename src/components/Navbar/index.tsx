import React, { FC } from "react"
import { Container, HStack, useDisclosure } from "@chakra-ui/react"
import ThresholdBrand from "./ThresholdBrand"
import SocialMediaLinks from "./SocialMediaLinks"
import HamburgerButton from "./HamburgerButton"
import { ExternalLinkHref, LinkInfo } from "./types"
import WhatsNextBanner from "./WhatsNextBanner"
import MobileDrawer from "./MobileNav/MobileDrawer"
import DesktopNavLinks from "./DesktopNav/DesktopNavLinks"

const Navbar: FC = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawOpen,
    onClose: onDrawerClose,
  } = useDisclosure()

  const { isOpen: showBanner, onClose: closeBanner } = useDisclosure({
    defaultIsOpen: true,
  })

  const navLinks: LinkInfo[] = [
    {
      text: "earn",
      dropdown: [
        {
          text: "How to Earn",
          href: "/earn",
        },
        {
          text: "Staker",
          href: "/earn/staker",
        },
        {
          text: "Liquidity Provider",
          href: "/earn/liquidity-provider",
        },
        {
          text: "BTC/tBTC User",
          href: "/earn/btc",
        },
        {
          text: "Token Holder",
          href: "/earn/token-holder",
        },
      ],
    },
    {
      text: "Governance",
      href: "/governance",
    },
    {
      text: "News",
      dropdown: [
        {
          text: "Press",
          href: "/press",
        },
        {
          text: "Blog",
          href: ExternalLinkHref.THRESHOLD_BLOG,
        },
      ],
    },
    {
      text: "About",
      dropdown: [
        {
          text: "Contributors",
          href: "/contributors",
        },
        {
          text: "FAQ",
          href: "/faq",
        },
        {
          text: "Audits",
          href: "/audits",
        },
      ],
    },
  ]

  return (
    <>
      {showBanner && <WhatsNextBanner onClose={closeBanner} />}
      <HStack
        bg="gray.900"
        h="90px"
        borderBottom="1px solid"
        borderColor="gray.700"
      >
        {/* TODO: NEED MAX WITH FROM DESIGN TEAM */}
        <Container maxW="1440px" h="100%" display="flex">
          <ThresholdBrand />
          <MobileDrawer
            isOpen={isDrawerOpen}
            onClose={onDrawerClose}
            navLinks={navLinks}
          />
          <DesktopNavLinks navLinks={navLinks} />
          <SocialMediaLinks />
          <HamburgerButton openDrawer={onDrawOpen} />
        </Container>
      </HStack>
    </>
  )
}

export default Navbar
