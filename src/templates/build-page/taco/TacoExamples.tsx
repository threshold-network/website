import React, { FC, useState } from "react"
import { Box, Stack, Collapse, Flex } from "@chakra-ui/react"
import { ResponsiveStack } from "../../../components/PageSection"
import { Image } from "../../../components/Image"
import { SectionInfo } from "../../../types"
import Card from "../../../components/Card"

export interface TacoExamplesProps {
  tacoExamples: SectionInfo[]
}

export interface TacoExampleProps extends SectionInfo {
  togglePanel: (index: number) => void
  expandedPanel: number | null
  index: number
}

export const TacoExampleCard: FC<TacoExampleProps> = ({
  togglePanel,
  expandedPanel,
  index,
  title,
  description,
}) => {
  return (
    <Box
      boxShadow="0px 0px 90px 4px rgba(153, 116, 255, 0.04)"
      rounded="2xl"
      p="2px"
      bgGradient={
        expandedPanel === index
          ? "linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
          : "none"
      }
    >
      <Card
        onClick={() => togglePanel(index)}
        cursor="pointer"
        w={{ base: "100%", md: "420px" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Card.Title fontWeight="medium">{title}</Card.Title>
          <Box fontSize="28px" cursor="pointer">
            {expandedPanel === index ? "-" : "+"}
          </Box>
        </Stack>
        <Collapse in={expandedPanel === index}>
          <Card.Body
            as="div"
            color="gray.300"
            fontSize=""
            lineHeight="26px"
            pr={24}
            noOfLines={4}
            my={4}
          >
            {description}
          </Card.Body>
        </Collapse>
      </Card>
    </Box>
  )
}

const TacoExamples: FC<TacoExamplesProps> = ({ tacoExamples }) => {
  const [expandedPanel, setExpandedPanel] = useState<number | null>(0)

  const togglePanel = (index: number) => {
    setExpandedPanel(expandedPanel === index ? null : index)
  }

  return (
    <ResponsiveStack
      w="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="start"
      spacing={12}
      mt={16}
    >
      <Box display="flex" flexDirection="column" gap={4}>
        {tacoExamples.map((example, index) => (
          <TacoExampleCard
            key={index}
            togglePanel={togglePanel}
            expandedPanel={expandedPanel}
            index={index}
            {...example}
          />
        ))}
      </Box>
      <Flex alignSelf="center" top={0} maxW="580px">
        <Image
          relativePath={
            expandedPanel !== null
              ? tacoExamples[expandedPanel].image!.relativePath
              : tacoExamples[0].image!.relativePath
          }
        />
      </Flex>
    </ResponsiveStack>
  )
}

export default TacoExamples
