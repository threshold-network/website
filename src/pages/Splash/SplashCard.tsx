import { FC } from "react"
import { Box, BoxProps, Divider, HStack, Icon } from "@chakra-ui/react"
import { Body2, Label1 } from "../../components/Typography"
import Card from "../../components/Card"

export interface SplashCardInfo {
  icon?: any
  title: string
  body: string
}

const SplashCard: FC<SplashCardInfo & BoxProps & { isCardColumn: boolean }> = ({
  icon,
  title,
  body,
  isCardColumn,
  ...props
}) => {
  return (
    <Card h="100%" w="100%" {...props}>
      <HStack paddingX={9} paddingY={8} borderColor="brand.300">
        <Icon as={icon} />
        <Label1 color="white" textTransform="uppercase">
          {title}
        </Label1>
      </HStack>
      {isCardColumn && <Divider mx={6} w="auto" />}
      <Box paddingX={9} paddingY={8} minH="120px">
        <Body2 color="white">{body}</Body2>
      </Box>
    </Card>
  )
}

export default SplashCard
