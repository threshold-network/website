import { FC } from "react"
import { CardButton } from "../Card"
import { ButtonProps, Stack } from "@chakra-ui/react"
import ExternalButtonLink from "../Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "./types"

interface NavCTAButtonsProps extends ButtonProps {
  menuButtons: CardButton[]
}

const NavCTAButtons: FC<NavCTAButtonsProps> = ({ menuButtons, ...props }) => {
  return (
    <Stack direction={{ base: "column", sm: "row" }} spacing={8}>
      {menuButtons.map((_: CardButton) => {
        return (
          <ExternalButtonLink
            variant="special"
            href={_.url as ExternalLinkHref}
            key={_.label}
            {...props}
          >
            {_.label}
          </ExternalButtonLink>
        )
      })}
    </Stack>
  )
}

export default NavCTAButtons
