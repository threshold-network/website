import { FC } from "react"
import { Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { LabelMd } from "../../Typography"

const NavLink: FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link
      as={GatsbyLink}
      px={2}
      to={href}
      color="gray.300"
      display="flex"
      _hover={{
        textDecoration: "none",
        color: "white",
        borderBottom: "1px solid white",
      }}
      height="100%"
    >
      <LabelMd lineHeight="90px" textTransform="uppercase">
        {children}
      </LabelMd>
    </Link>
  )
}

export default NavLink
