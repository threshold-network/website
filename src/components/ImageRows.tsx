import { FC } from "react"
import { LabelMd } from "./Typography"
import { Image, ImageProps } from "./Image"
import { Divider, Flex, Show, Stack } from "@chakra-ui/react"

interface ImageRowData {
  title: string
  images: {
    name: string
    image: ImageProps
  }[]
}

interface ImageRowsProps {
  data: ImageRowData[]
  renderImageCallback?: (imageRowData: ImageRowData) => {}
}

export const ImageRows: FC<ImageRowsProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index, array) => {
        return (
          <>
            <Stack direction={{ base: "column", xl: "row" }}>
              <Stack
                direction={{ base: "column", xl: "row" }}
                alignItems={{ base: "flex-start", xl: "center" }}
              >
                <LabelMd
                  width={{ base: "500px", xl: "150px" }}
                  color={{ base: "brand.300", xl: "gray.300" }}
                >
                  {item.title}
                </LabelMd>
                <Show below={"xl"}>
                  <Divider
                    orientation="horizontal"
                    borderTop="1px solid"
                    color={"brand.700"}
                  />
                </Show>
              </Stack>
              <Flex wrap={"wrap"}>
                {item.images.map((imageData) => {
                  return (
                    <Image
                      {...imageData.image}
                      marginInlineStart="0"
                      px={"2px"}
                    />
                  )
                })}
              </Flex>
            </Stack>
            {index !== array.length - 1 && <Divider color="gray.300" />}
          </>
        )
      })}
    </>
  )
}
