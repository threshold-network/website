import { FC } from "react"
import { HStack, Stack, Square, StackDivider } from "@chakra-ui/react"
import { BodyMd, LabelMd } from "./Typography"
import { Image } from "."
import { SubItem } from "../templates/home-page/InfoColumnsSection"
import { ResponsiveStack } from "./PageSection"
import useChakraBreakpoint from "../hooks/useChakraBreakpoint"

const InfoColumnsStack: FC<{
  subitems: SubItem[]
}> = ({ subitems }) => {
  const isMobile = useChakraBreakpoint("md")

  return (
    <ResponsiveStack
      spacing="32px !important"
      mt={32}
      divider={isMobile ? <StackDivider bg="gray.700" /> : undefined}
    >
      {subitems.slice(0, 3).map((_: SubItem) => (
        <Stack
          maxW={{ base: "100%", md: "300px" }}
          w="full"
          direction={{
            base: "row",
            md: "column",
          }}
          spacing={8}
        >
          <Image w="128px" h="128px" {..._.image} />
          <Stack direction="column">
            <HStack>
              <Square bg="brand.500" w="20px" h="20px" />
              <LabelMd textTransform="uppercase">{_.title}</LabelMd>
            </HStack>
            <BodyMd
              mt="1rem"
              as="div"
              dangerouslySetInnerHTML={{ __html: _.description }}
            />
          </Stack>
        </Stack>
      ))}
    </ResponsiveStack>
  )
}

export default InfoColumnsStack
