import React, { FC } from "react"
import { Box, Table, Tbody, Td, Th, Thead, Tr, Center } from "@chakra-ui/react"
import { Image } from "../../../components/Image"
import { BodySm } from "../../../components"

export interface TableOptions {
  project: "Taco" | "Taco" | "Taco" | "Taco" | "Taco"
  mark: "POSITIVE" | "NEGATIVE" | "NEUTRAL"
  highlight: boolean
}

export interface TableRow {
  label: string
  options: TableOptions[]
}

export interface SectionTable {
  headers: Array<string>
  features: TableRow[]
}

export interface TacoTableProps {
  headers: Array<string>
  features: TableRow[]
}

const TacoTable: FC<TacoTableProps> = ({ headers, features }) => {
  const getMarkImage = (mark: string, highlight: boolean) => {
    const colorSuffix = highlight
      ? "purple"
      : mark === "NEGATIVE"
      ? "gray"
      : "white"

    switch (mark) {
      case "POSITIVE":
        return `/check-${colorSuffix}.svg`
      case "NEGATIVE":
        return `/x-${colorSuffix}.svg`
      case "NEUTRAL":
        return `/dash-${colorSuffix}.svg`
      default:
        return ""
    }
  }

  return (
    <Box my={12}>
      <Table variant="simple" borderBottom="none">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index} textAlign="center">
                <BodySm
                  textTransform="none"
                  fontWeight="medium"
                  letterSpacing={0}
                  mb={2}
                  color={header === "TACo" ? "white" : "#727485"}
                >
                  {header}
                </BodySm>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody border="solid 1px" borderColor="gray.700" borderRadius="12px">
          {features.map((feature, index) => (
            <Tr
              key={index}
              boxShadow="0px 0px 90px 3px rgba(153, 116, 255, 0.06)"
            >
              <Td py={8} fontSize="12px" textAlign="center">
                <BodySm>{feature.label}</BodySm>
              </Td>
              {feature.options.map((option, optIndex) => (
                <Td textAlign="center" key={optIndex}>
                  <Center>
                    <Image
                      relativePath={getMarkImage(option.mark, option.highlight)}
                      alt={option.mark}
                    />
                  </Center>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default TacoTable
