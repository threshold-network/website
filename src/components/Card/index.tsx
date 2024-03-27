import {
  Box,
  BoxProps,
  Divider as ChakraDivider,
  TextProps,
  DividerProps,
  useStyleConfig,
} from "@chakra-ui/react"
import { FC } from "react"
import { BodyLg, BodySm, LabelSm } from "../Typography"

export interface CardButton {
  label: string
  url: string
  variant: string
  posthogLabel?: string
}

export interface CardCategory {
  label: string
}

type CardComponent<P> = FC<P> & {
  PreTitle: FC<TextProps>
  Title: FC<TextProps>
  SubTitle: FC<TextProps>
  Divider: FC<DividerProps>
  Body: FC<TextProps>
}

const Card: CardComponent<BoxProps> = (props) => {
  const styles = useStyleConfig("Card")
  return <Box __css={styles} {...props} />
}

const PreTitle: FC = ({ children, ...textProps }) => (
  <LabelSm as="span" bgClip="text" textTransform="uppercase" {...textProps}>
    {children}
  </LabelSm>
)

const Title: FC = ({ children, ...textProps }) => (
  <BodyLg {...textProps}>{children}</BodyLg>
)

const SubTitle: FC = ({ children, ...textProps }) => (
  <LabelSm color="gray.500" textTransform="uppercase" {...textProps}>
    {children}
  </LabelSm>
)

const Body: FC = ({ children, ...textProps }) => {
  return <BodySm {...textProps}>{children}</BodySm>
}

const Divider = ({ ...dividerProps }) => {
  return <ChakraDivider bg="gray.700" {...dividerProps} />
}

Card.PreTitle = PreTitle
Card.Title = Title
Card.SubTitle = SubTitle
Card.Body = Body
Card.Divider = Divider

export default Card
