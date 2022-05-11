import { FC } from "react"
import { Image, ImageProps } from "./Image"
import Card from "./Card"
import { H5, LabelMd } from "./Typography"
import ExternalButtonLink from "./Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "./Navbar/types"
import { Box, Stack } from "@chakra-ui/react"

interface LPCardProps {
  image1: ImageProps
  image2: ImageProps
  title: string
  subTitle: string
  buttonText: string
  buttonUrl: string
}

const LPCard: FC<LPCardProps> = ({
  image1,
  image2,
  title,
  subTitle,
  buttonUrl,
  buttonText,
}) => {
  return (
    <Card>
      <Stack direction="row">
        <Box position="relative" w="48px" h="48px" mr={2}>
          <Image
            left={0}
            top={0}
            position="absolute"
            boxSize="32px"
            h="32px"
            w="32px"
            {...image1}
          />
          <Image
            left="20px"
            top="20px"
            position="absolute"
            boxSize="48px"
            h="32px"
            w="32px"
            {...image2}
          />
        </Box>
        <Stack spacing={0}>
          <H5 color="gray.100">{title}</H5>
          <LabelMd textTransform="uppercase" color="gray.500">
            {subTitle}
          </LabelMd>
        </Stack>
      </Stack>
      <ExternalButtonLink
        size="lg"
        width="100%"
        href={buttonUrl as ExternalLinkHref}
        mt={8}
      >
        {buttonText}
      </ExternalButtonLink>
    </Card>
  )
}

export default LPCard
