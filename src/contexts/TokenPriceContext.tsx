import React, {
  useEffect,
  useContext,
  createContext,
  useRef,
  useState,
} from "react"
import { exchangeAPI, CoingeckoID } from "../utils"

export const TokenPriceContext = createContext<{
  threshold: string
  tbtc: string
}>({
  threshold: "0",
  tbtc: "0",
})

export const TokenPriceContextProvider: React.FC = ({ children }) => {
  const shouldUpdateState = useRef<boolean>(true)
  const [thresholdPrice, setThresholdPrice] = useState("0")
  const [tBTCPrice, setTBTCPrice] = useState("0")

  useEffect(() => {
    shouldUpdateState.current = true

    const fetchTokenPrice = async () => {
      const tPrice = await exchangeAPI.fetchCryptoCurrencyPriceUSD(
        CoingeckoID.T
      )
      const tBTCPrice = await exchangeAPI.fetchCryptoCurrencyPriceUSD(
        CoingeckoID.TBTC
      )

      if (!shouldUpdateState.current) return
      setThresholdPrice(tPrice)
      setTBTCPrice(tBTCPrice)
    }

    fetchTokenPrice()

    return () => {
      shouldUpdateState.current = false
    }
  }, [])

  return (
    <TokenPriceContext.Provider
      value={{ threshold: thresholdPrice, tbtc: tBTCPrice }}
    >
      {children}
    </TokenPriceContext.Provider>
  )
}

export const useTokenPriceContext = () => useContext(TokenPriceContext)

export const useTTokenPrice = () => {
  return useTokenPriceContext().threshold
}

export const useTBTCTokenPrice = () => {
  return useTokenPriceContext().tbtc
}
