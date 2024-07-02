import { gql, request } from "graphql-request"
import { TBTC_SUBGRAPH_ID, SUBGRAPH_GATEWAY_URL } from "../../config/subgraph"
import { useEffect, useState } from "react"

export const useTotalMints = () => {
  const [totalMints, setTotalMints] = useState<number | undefined>(undefined)

  const fetchTotalMints = async () => {
    const limitForOneQuery = 1000
    let lastId = ""
    let totalMints = 0
    let numberOfMintsFromQuery = limitForOneQuery

    do {
      const query = gql`
      query {
        transactions(
          where: { description: "Minting Finalized" , id_gt: "${lastId}" }
          orderBy: id
          orderDirection: asc
          first: ${limitForOneQuery}
        ) {
          id
        }
      }`

      const result: { transactions: { id: string }[] } = await request(
        SUBGRAPH_GATEWAY_URL + TBTC_SUBGRAPH_ID,
        query
      )

      numberOfMintsFromQuery = result.transactions.length
      totalMints += numberOfMintsFromQuery
      lastId = result.transactions[numberOfMintsFromQuery - 1].id
    } while (numberOfMintsFromQuery === limitForOneQuery)

    setTotalMints(totalMints)
  }

  useEffect(() => {
    fetchTotalMints()
  }, [])

  return {
    fetchTotalMints,
    totalMints,
  }
}
