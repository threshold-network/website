import { FC } from "react"
import { BodyMd, Image, ImageProps } from "../../../../components"
import { HStack, Icon, Stack } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/all"

export interface TechnicalRequirementProps {
  image: {
    image: ImageProps
    alt: string
  }
  label: string
}

const TechnicalRequirementStack: FC<TechnicalRequirementProps> = ({
  image: { image, alt },
  label,
}) => {
  return (
    <Stack spacing={8}>
      <Image margin="auto" h="128px" w="128px" {...image} alt={alt} />
      <HStack justifyContent="center">
        <Icon boxSize="22px" color="green.500" as={AiFillCheckCircle} />
        <BodyMd color="gray.50">{label}</BodyMd>
      </HStack>
    </Stack>
  )
}

export default TechnicalRequirementStack
