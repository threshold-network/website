import { FC } from "react"
import { Divider, VStack, Box, SimpleGrid } from "@chakra-ui/react"
import { LabelMd } from "./Typography"
import { Image, ImageProps } from "./Image"

interface ImageRowItem {
  name: string
  image: ImageProps
}

interface ImageRowData<T extends ImageRowItem> {
  title: string
  images: T[]
}

interface ImageRowsProps<T extends ImageRowItem> {
  data: ImageRowData<T>[]
  renderImageCallback?: (imageRowData: T) => {}
}

const DefaultItem: FC<ImageRowItem> = ({ name, image }) => (
  <Image {...image} alt={name} />
)

const renderDefaultItem = (item: ImageRowItem) => (
  <DefaultItem key={item.name} {...item} />
)

export const ImageRows = <T extends ImageRowItem>({
  data,
  renderImageCallback,
}: ImageRowsProps<T>) => {
  return (
    <VStack spacing="14">
      {data.map((item) => {
        return (
          <Box key={item.title}>
            <LabelMd color="brand.300">{item.title}</LabelMd>
            <Divider borderColor="brand.700" mb="10" />
            <SimpleGrid columns={4} spacing="14">
              {item.images.map(renderImageCallback ?? renderDefaultItem)}
            </SimpleGrid>
          </Box>
        )
      })}
    </VStack>
  )
}
