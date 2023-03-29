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
import { formatTokenAmount, shortenAddress } from "../../../utils"
import { getRelativeTime } from "../../../utils/time"

export interface LatestMint {
  amount: string
  txHash: string
  to: string
  from: string
  timestamp: string
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
              const backgroundColor = index % 2 ? "transaprent" : "#181D23"
              return (
                <Tr backgroundColor={backgroundColor}>
                  <Td borderBottom={"none"}>
                    <BodyMd>{formatTokenAmount(mint.amount, "0,00.00")}</BodyMd>
                  </Td>
                  <Td borderBottom={"none"}>
                    {/* TODO: Add IBM Plex Mono font and add image next to address */}
                    <BodyMd fontFamily={"Courier New"}>
                      {shortenAddress(mint.from)}
                    </BodyMd>
                  </Td>
                  <Td borderBottom={"none"}>
                    <BodyMd fontFamily={"Courier New"}>
                      {shortenAddress(mint.txHash)}
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
