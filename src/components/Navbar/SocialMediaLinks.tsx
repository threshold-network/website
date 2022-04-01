import { FC } from "react"
import { HStack, Link } from "@chakra-ui/react"
import { Image, ImageProps } from "../Image"
import { SocialLink } from "./types"

const SocialMediaLinks: FC<{
  isMobileDrawerFooter?: boolean
  links: SocialLink[]
}> = ({ isMobileDrawerFooter, links }) => {
  return (
    <HStack
      spacing={6}
      pl={8}
      display={{
        base: isMobileDrawerFooter ? "inherit" : "none",
        lg: "inherit",
      }}
      justifyContent={{
        base: isMobileDrawerFooter ? "center" : "flex-end",
        lg: "flex-start",
      }}
      borderLeft={{
        base: isMobileDrawerFooter ? "none" : "1px solid",
        lg: "none",
      }}
      borderColor="brand.300"
      marginBottom={isMobileDrawerFooter ? 8 : undefined}
    >
      {links.map(({ url, icon: { image, alt } }) => (
        <Link key={url} href={url} target="_blank" rel="noreferrer">
          <Image
            boxSize="25px"
            color="gray.300"
            _hover={{ color: "white" }}
            {...image}
            alt={alt}
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks
