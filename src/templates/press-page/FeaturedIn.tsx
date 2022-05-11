import { FC } from "react"
import { Box, SimpleGrid, Stack, useMediaQuery } from "@chakra-ui/react"
import { Image, ImageProps, LabelMd } from "../../components"

const FeaturedIn: FC<{
  pressImages: ImageProps[]
}> = ({ pressImages }) => {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px)")

  if (isLargerThan990) {
    return (
      <Box h="200px" paddingTop="80px" mt={24} mb={28}>
        <Stack
          left={0}
          bg="linear-gradient(130.52deg, #7D00FF 0%, #7F00AC 100%);"
          position="absolute"
          width="100vw"
          justifyContent="space-around"
          direction="row"
          h="124px"
        >
          <LabelMd m={{ base: "auto", md: "auto 24px" }}>Featured In</LabelMd>
          {pressImages.map((image) => (
            <Image
              key={image.id}
              display="block"
              maxWidth="140px"
              maxHeight="60px"
              width="auto"
              height="auto"
              marginTop="auto !important"
              marginBottom="auto !important"
              {...image}
            />
          ))}
        </Stack>
      </Box>
    )
  }

  return (
    <Box h="400px" paddingTop="80px" mt={24} mb={28}>
      <Stack
        left={0}
        bg="linear-gradient(130.52deg, #7D00FF 0%, #7F00AC 100%);"
        width="100vw"
        position="absolute"
        justifyContent="center"
        pb={8}
      >
        <LabelMd textAlign="center" m={8}>
          Featured In
        </LabelMd>
        <SimpleGrid columns={2}>
          {pressImages.map((image) => (
            <Image key={image.id} m="auto" maxW="200px" {...image} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
}

export default FeaturedIn
