import {
  Box,
  BoxProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { FC } from "react"
import { BodyMd, H5, LabelSm } from "../../../components"
import {
  formatTokenAmount,
  getRelativeTime,
  shortenAddress,
} from "../../../utils"

export interface LatestMint {
  id: string // txHash
  timestamp: string
  deposits: [
    {
      actualAmountReceived: string
      user: {
        id: string
      }
    }
  ]
}

interface LatestMintProps {
  latestMints: LatestMint[]
}

export const LatestMints: FC<LatestMintProps & BoxProps> = ({
  latestMints,
  ...restProps
}) => {
  return (
    <Box {...restProps}>
      <H5 mb="2rem">Latest mints</H5>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <LabelSm color="gray.500">Tbtc amount</LabelSm>
              </Th>
              <Th>
                <LabelSm color="gray.500">Wallet Address</LabelSm>
              </Th>
              <Th>
                <LabelSm color="gray.500">TX Hash</LabelSm>
              </Th>
              <Th textAlign={"right"}>
                <LabelSm color="gray.500">Timestamp</LabelSm>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {latestMints.map((mint, index) => {
              return (
                <Tr
                  _odd={{ backgroundColor: "#181D23" }}
                  _even={{ backgroundColor: "transparent" }}
                  key={`latest-mints-${mint.id}`}
                >
                  <Td borderBottom={"none"}>
                    <BodyMd>
                      {formatTokenAmount(
                        mint.deposits[0].actualAmountReceived,
                        "0,00.00"
                      )}
                    </BodyMd>
                  </Td>
                  <Td borderBottom={"none"}>
                    {/* TODO: Add IBM Plex Mono font and add image next to address */}
                    <BodyMd fontFamily={"Courier New"}>
                      {shortenAddress(mint.deposits[0].user.id)}
                    </BodyMd>
                  </Td>
                  <Td borderBottom={"none"}>
                    <BodyMd fontFamily={"Courier New"}>
                      {shortenAddress(mint.id)}
                    </BodyMd>
                  </Td>
                  <Td borderBottom={"none"} textAlign={"right"}>
                    <BodyMd>{getRelativeTime(Number(mint.timestamp))}</BodyMd>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
