import axios from "axios"
import { FixedNumber } from "ethers"

export enum CoingeckoID {
  KEEP = "keep-network",
  NU = "nucypher",
  T = "threshold-network-token",
  ETH = "ethereum",
}

const fetchCryptoCurrencyPriceUSD = async (id: CoingeckoID) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  )
  return response.data[id].usd
}

const toUsdBalance = (
  balance: string | number,
  usdConversion: string | number
): FixedNumber => {
  return FixedNumber.fromString(usdConversion.toString()).mulUnsafe(
    FixedNumber.fromString(balance.toString())
  )
}

export const exchangeAPI = {
  fetchCryptoCurrencyPriceUSD,
  toUsdBalance,
}
