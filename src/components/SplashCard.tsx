import { FC } from "react"
import { Box, BoxProps, Divider, HStack } from "@chakra-ui/react"
import { Body2, Label1 } from "./Typography"
import Card from "./Card"
import { Image, ImageProps } from "./Image"

export interface SplashCardInfo {
  icon: ImageProps
  title: string
  body: string
}

export const SplashCard: FC<
  SplashCardInfo & BoxProps & { isCardColumn: boolean }
> = ({ icon, title, body, isCardColumn, ...props }) => {
  return (
    <Card h="100%" w="100%" {...props}>
      <HStack paddingX={9} paddingY={8} borderColor="brand.300">
        <Image {...icon} boxSize="24px" />
        <Label1 color="white" textTransform="uppercase">
          {title}
        </Label1>
      </HStack>
      {isCardColumn && <Divider mx={6} w="auto" />}
      <Box paddingX={9} paddingY={8} minH="120px">
        <Body2 color="white" dangerouslySetInnerHTML={{ __html: body }} />
      </Box>
    </Card>
  )
}
