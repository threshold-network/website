import { FC } from "react"
import { SimpleGrid, Stack, useMediaQuery } from "@chakra-ui/react"
import { Image, ImageProps, LabelMd } from "../../components"

const FeaturedIn: FC<{
  pressImages: ImageProps[]
}> = ({ pressImages }) => {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px)")

  if (isLargerThan990) {
    return (
      <Stack
        left={0}
        bg="linear-gradient(130.52deg, #7D00FF 0%, #7F00AC 100%);"
        position="absolute"
        width="100vw"
        justifyContent="space-around"
        direction="row"
        mt={8}
      >
        <LabelMd m={{ base: "auto", md: "auto 24px" }}>Featured In</LabelMd>
        {pressImages.map((image) => (
          <Image m="auto" maxW="200px" {...image} />
        ))}
      </Stack>
    )
  }

  return (
    <Stack
      left={0}
      bg="linear-gradient(130.52deg, #7D00FF 0%, #7F00AC 100%);"
      width="100vw"
      ml={-8}
      justifyContent="center"
      mt={8}
      pb={8}
    >
      <LabelMd textAlign="center" m={8}>
        Featured In
      </LabelMd>
      <SimpleGrid columns={2}>
        {pressImages.map((image) => (
          <Image m="auto" maxW="200px" {...image} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default FeaturedIn
