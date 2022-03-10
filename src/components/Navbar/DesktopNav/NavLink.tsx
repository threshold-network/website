import React, { FC } from "react"
import { Link } from "@chakra-ui/react"
import { Label1 } from "../../Typography"

const NavLink: FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link
      px={2}
      href={href}
      color="gray.300"
      display="flex"
      _hover={{
        textDecoration: "none",
        color: "white",
        borderBottom: "1px solid white",
      }}
      height="100%"
    >
      <Label1 lineHeight="90px" textTransform="uppercase">
        {children}
      </Label1>
    </Link>
  )
}

export default NavLink
