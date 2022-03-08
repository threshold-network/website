import { FC } from "react"
import { HStack, Icon } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const HamburgerButton: FC<{ openDrawer: () => void }> = ({ openDrawer }) => {
  return (
    <HStack
      borderLeft="1px solid"
      borderColor="gray.700"
      display={{ base: "inherit", lg: "none" }}
      pl="28px"
      pr={2}
    >
      <Icon
        onClick={openDrawer}
        color="gray.300"
        _hover={{
          cursor: "pointer",
          color: "white",
        }}
        boxSize={6}
        variant="ghost"
        as={HamburgerIcon}
      />
    </HStack>
  )
}

export default HamburgerButton
