import { FC } from "react"
import { Box, BoxProps, Divider, HStack, Icon } from "@chakra-ui/react"
import { BodyMd, LabelMd } from "../../components/Typography"
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
        <LabelMd color="white" textTransform="uppercase">
          {title}
        </LabelMd>
      </HStack>
      {isCardColumn && <Divider mx={6} w="auto" />}
      <Box paddingX={9} paddingY={8} minH="120px">
        <BodyMd color="white">{body}</BodyMd>
      </Box>
    </Card>
  )
}

export default SplashCard
