import React, { FC } from "react"
import { HStack, Image, Stack, Square } from "@chakra-ui/react"
import { BodyMd, LabelMd } from "../../../components/Typography"

const ImageStack: FC<{ title: string; description: string; imgSrc: any }> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <Stack
      maxW={{ base: "100%", md: "300px" }}
      w="full"
      direction={{
        base: "row",
        md: "column",
      }}
      spacing={8}
    >
      <Image w="128px" h="128px" src={imgSrc} />
      <Stack direction="column">
        <HStack>
          <Square bg="brand.500" w="20px" h="20px" />
          <LabelMd>{title}</LabelMd>
        </HStack>
        <BodyMd mt="1rem !important">{description}</BodyMd>
      </Stack>
    </Stack>
  )
}

export default ImageStack
