import { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FixedNumber } from "ethers"
import { CoingeckoID, exchangeAPI, formatUnits } from "../utils"
import { useERC20TokensBalanceCall } from "./useERC20TokensBalanceCall"

// https://etherscan.io/address/0x9f6e831c8f8939dc0c830c6e492e7cef4f9c2f5f
const DAO_TREASURY_ADDRESS = "0x9f6e831c8f8939dc0c830c6e492e7cef4f9c2f5f"

const query = graphql`
  query {
    markdownRemark(frontmatter: { template: { eq: "dao-treasury-tokens" } }) {
      id
      frontmatter {
        tokens {
          address
          coingeckoId
        }
      }
    }
  }
`
export const useBalanceOfDAOTreasury = () => {
  const [totalTreasuryInUSD, setTotalTreasuryInUSD] = useState("0")

  const data = useStaticQuery(query)
  const { tokens }: { tokens: { address: string; coingeckoId: string }[] } =
    data.markdownRemark.frontmatter
  const getTokenBalances = useERC20TokensBalanceCall(
    tokens.map(({ address }) => address),
    DAO_TREASURY_ADDRESS
  )

  useEffect(() => {
    const fetchTokenBalances = async () => {
      const tokenBalances = await getTokenBalances()
      const tokenPrices = await Promise.all(
        tokens.map(({ coingeckoId }) =>
          exchangeAPI.fetchCryptoCurrencyPriceUSD(coingeckoId as CoingeckoID)
        )
      )
      const _totalTreasuryInUSD = tokenBalances.reduce(
        (reducer: FixedNumber, tokenBalance: string[], index: number) => {
          const tokenValue = exchangeAPI.toUsdBalance(
            formatUnits(tokenBalance.toString()),
            tokenPrices[index]
          )
          return reducer.addUnsafe(tokenValue)
        },
        FixedNumber.fromString("0")
      )
      setTotalTreasuryInUSD(_totalTreasuryInUSD)
    }
    fetchTokenBalances()
  }, [getTokenBalances])

  return totalTreasuryInUSD
}
