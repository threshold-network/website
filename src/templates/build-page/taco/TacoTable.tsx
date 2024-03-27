import React, { FC } from "react"
import { Box, Table, Tbody, Td, Th, Thead, Tr, Center } from "@chakra-ui/react"
import { BodySm, Image, ImageProps } from "../../../components"

export interface TableOptions {
  project: "Taco" | "Taco" | "Taco" | "Taco" | "Taco"
  image: ImageProps
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
  return (
    <Box my={12}>
      <Table variant="simple" borderBottom="none">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>
                <BodySm
                  textTransform="none"
                  fontWeight="medium"
                  pl={index === 0 ? 14 : 0}
                  textAlign={index === 0 ? "left" : "center"}
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
              <Td py={8} pl={20}>
                <BodySm>{feature.label}</BodySm>
              </Td>
              {feature.options.map((option, optIndex) => (
                <Td textAlign="center" w={36} key={optIndex}>
                  <Center>
                    <Image {...option.image} />
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
