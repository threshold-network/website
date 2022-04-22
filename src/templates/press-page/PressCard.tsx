import { FC } from "react"
import { Stack } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { ImageProps } from "../../components"

export interface PressCardProps {
  image: ImageProps
  title: string
  subTitle: string
  description: string
  url: string
}

const PressCard: FC<PressCardProps> = ({
  title,
  subTitle,
  description,
  url,
}) => {
  return (
    <Card
      maxW={{ base: "100%", md: "336px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Stack spacing={6}>
        <Stack spacing={4}>
          <Card.Title>{title}</Card.Title>
          <Card.SubTitle>{subTitle}</Card.SubTitle>
        </Stack>
        <Card.Divider />
        <Card.Body as="div" noOfLines={6}>
          {description}
        </Card.Body>
      </Stack>
      <ExternalButtonLink mt={16} href={url as ExternalLinkHref} variant="link">
        Read
      </ExternalButtonLink>
    </Card>
  )
}
export default PressCard
