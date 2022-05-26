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
}>({
  threshold: "0",
})

export const TokenPriceContextProvider: React.FC = ({ children }) => {
  const shouldUpdateState = useRef<boolean>(true)
  const [thresholdPrice, setThresholdPrice] = useState("0")

  useEffect(() => {
    shouldUpdateState.current = true

    const fetchTokenPrice = async () => {
      const tPrice = await exchangeAPI.fetchCryptoCurrencyPriceUSD(
        CoingeckoID.T
      )

      if (!shouldUpdateState.current) return
      setThresholdPrice(tPrice)
    }

    fetchTokenPrice()

    return () => {
      shouldUpdateState.current = false
    }
  }, [])

  return (
    <TokenPriceContext.Provider value={{ threshold: thresholdPrice }}>
      {children}
    </TokenPriceContext.Provider>
  )
}

export const useTokenPriceContext = () => useContext(TokenPriceContext)

export const useTTokenPrice = () => {
  return useTokenPriceContext().threshold
}
