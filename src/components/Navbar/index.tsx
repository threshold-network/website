import { FC } from "react"
import { Container, HStack, useDisclosure } from "@chakra-ui/react"
import NavLinks from "./NavLinks"
import ThresholdBrand from "./ThresholdBrand"
import SocialMediaLinks from "./SocialMediaLinks"
import HamburgerButton from "./HamburgerButton"
import MobileDrawer from "./MobileDrawer"
import { LinkInfo } from "./types"
import WhatsNextBanner from "./WhatsNextBanner"

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
    { href: "/", text: "Community" },
    { href: "/", text: "Blog" },
  ]

  return (
    <>
      {showBanner && <WhatsNextBanner onClose={closeBanner} />}
      <HStack borderBottom="1px solid" borderColor="purple.300" h="90px">
        <Container maxW="6xl" h="100%" display="flex">
          <HamburgerButton openDrawer={onDrawOpen} />
          <MobileDrawer
            isOpen={isDrawerOpen}
            onClose={onDrawerClose}
            navLinks={navLinks}
          />
          <ThresholdBrand />
          <NavLinks navLinks={navLinks} />
          <SocialMediaLinks />
        </Container>
      </HStack>
    </>
  )
}

export default Navbar
