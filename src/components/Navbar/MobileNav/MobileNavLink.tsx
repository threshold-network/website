import { FC } from "react"
import { Box, BoxProps, Icon, Link } from "@chakra-ui/react"
import { H5 } from "../../Typography"
import { FiArrowRight } from "react-icons/all"

const MobileNavLink: FC<{ href?: string; hasNested: boolean } & BoxProps> = ({
  href,
  children,
  hasNested,
  ...props
}) => {
  return (
    <Box {...props}>
      <Link
        href={href}
        target="_blank"
        color="white"
        display="flex"
        justifyContent="space-between"
        _hover={{
          textDecoration: "none",
        }}
        py={8}
      >
        <H5>{children}</H5>
        {hasNested && <Icon as={FiArrowRight} boxSize={6} mt="7px" />}
      </Link>
    </Box>
  )
}

export default MobileNavLink
