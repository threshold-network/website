import { FC } from "react"
import { HStack, Image, Link } from "@chakra-ui/react"
import { withPrefix } from "gatsby"

const SocialMediaLinks: FC<{
  isMobileDrawerFooter?: boolean
  links: { url: string; icon: { image: any; alt: string } }[]
}> = ({ isMobileDrawerFooter, links }) => {
  return (
    <HStack
      spacing={6}
      px={8}
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
            src={withPrefix(image)}
            alt={alt}
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks
