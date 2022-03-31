import { FC } from "react"
import { HStack, Link } from "@chakra-ui/react"
import { ButtonLg, Image, ImageProps } from "../../../../components"

export interface GettingStartedButtonLink {
  leftIcon: ImageProps
  label: string
  rightIcon: ImageProps
  url: string
}

const ExpandedButtonLink: FC<GettingStartedButtonLink> = ({
  leftIcon,
  rightIcon,
  url,
  label,
}) => {
  return (
    <HStack
      bg="gray.900"
      borderColor="gray.700"
      border="1px solid"
      borderRadius="md"
      justifyContent="space-between"
      p={6}
      _hover={{
        cursor: "pointer",
        bg: "gray.800",
      }}
      as={Link}
      href={url}
      target="_blank"
    >
      <HStack>
        <Image boxSize="25px" {...leftIcon} />
        <ButtonLg>{label}</ButtonLg>
      </HStack>
      <Image boxSize="25px" {...rightIcon} />
    </HStack>
  )
}

export default ExpandedButtonLink
