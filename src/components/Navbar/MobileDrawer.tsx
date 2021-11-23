import { FC } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  StackDivider,
} from "@chakra-ui/react"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"
import ThresholdBrand from "./ThresholdBrand"
import MobileNavLink from "./MobileNavLink"
import { LinkInfo } from "./types"
import SocialMediaLinks from "./SocialMediaLinks"

const MobileDrawer: FC<{
  onClose: () => void
  isOpen: boolean
  navLinks: LinkInfo[]
}> = ({ onClose, isOpen, navLinks }) => {
  const isMobileDevice = useChakraBreakpoint("md")
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen && isMobileDevice}
    >
      <DrawerOverlay />
      <DrawerContent bg="purple.700">
        <DrawerHeader py="44px">
          <ThresholdBrand />
        </DrawerHeader>
        <DrawerBody
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          pb={20}
        >
          <Stack divider={<StackDivider borderColor="purple.800" />}>
            {navLinks.map(({ href, text }) => (
              <MobileNavLink key={text} href={href}>
                {text}
              </MobileNavLink>
            ))}
          </Stack>
          <SocialMediaLinks isMobileDrawerFooter />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer
