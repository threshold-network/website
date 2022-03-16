import { FC } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import { ExternalLinkHref } from "../Navbar/types"
import { Telegram } from "../../static/icons/Telegram"

const TelegramButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      variant="outline"
      rel="noopener noreferrer"
      target="_blank"
      leftIcon={<Telegram />}
      {...props}
      as="a"
      href={ExternalLinkHref.TELEGRAM}
    >
      Telegram
    </Button>
  )
}

export default TelegramButton
