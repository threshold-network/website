import { FC } from "react"
import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const HamburgerButton: FC<Omit<IconButtonProps, "aria-label">> = (props) => {
  return (
    <IconButton
      variant="ghost"
      aria-label="open navigation"
      icon={<Icon as={HamburgerIcon} />}
      {...props}
    />
  )
}

export default HamburgerButton
