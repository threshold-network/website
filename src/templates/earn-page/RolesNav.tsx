import { FC } from "react"
import { Button, HStack, StackProps } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { Location } from "@reach/router"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"

// @ts-ignore
const RolesNav = ({ location }) => {
  const { pathname } = location
  const isSmallScreen = useChakraBreakpoint("md")

  return (
    <HStack
      bg="gray.800"
      p={2}
      mt={8}
      borderRadius="md"
      justifyContent="space-between"
    >
      <Button
        as={GatsbyLink}
        to="/earn/btc"
        variant={pathname.includes("/btc") ? "outline" : "ghost"}
        width="full"
      >
        tBTC {!isSmallScreen && "Bridge"}
      </Button>
      <Button
        as={GatsbyLink}
        to="/earn/liquidity-provider"
        variant={pathname.includes("/liquidity-provider") ? "outline" : "ghost"}
        width="full"
      >
        Liquidity {!isSmallScreen && "Provider"}
      </Button>
      <Button
        as={GatsbyLink}
        to="/earn/token-holder"
        variant={pathname.includes("/token-holder") ? "outline" : "ghost"}
        width="full"
      >
        Token {!isSmallScreen && "Holder"}
      </Button>
    </HStack>
  )
}

const RolesNavWrapper: FC<StackProps> = (props) => {
  return (
    <Location>
      {(locationProps) => <RolesNav {...locationProps} {...props} />}
    </Location>
  )
}

export default RolesNavWrapper
