import { FC } from "react"
import { HStack, Link, StackProps } from "@chakra-ui/react"
import { Image, ImageProps } from "../Image"
import { SocialLink } from "./types"

const SocialMediaLinks: FC<
  {
    isMobileDrawerFooter?: boolean
    links: SocialLink[]
  } & StackProps
> = ({ isMobileDrawerFooter, links, ...stackProps }) => {
  return (
    <HStack
      w="100%"
      spacing={5}
      display={{
        base: isMobileDrawerFooter ? "inherit" : "none",
        xl: "inherit",
      }}
      justifyContent={{
        base: isMobileDrawerFooter ? "center" : "flex-end",
        xl: "flex-start",
      }}
      borderLeft={{
        base: isMobileDrawerFooter ? "none" : "1px solid",
        xl: "none",
      }}
      borderColor="brand.300"
      marginBottom={isMobileDrawerFooter ? 8 : undefined}
      {...stackProps}
    >
      {links.map(({ url, icon: { image, alt } }) => (
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noreferrer"
          sx={{ "svg path": { fill: "currentColor" } }}
        >
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
