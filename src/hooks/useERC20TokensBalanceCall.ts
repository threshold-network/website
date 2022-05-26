import { Contract } from "ethers"
import { useMulticall } from "./useMulticall"

const ERC20_ABI = ["function balanceOf(address owner) view returns (uint256)"]

export const useERC20TokensBalanceCall = (
  tokenAddresses: string[],
  address: string
) => {
  return useMulticall(
    tokenAddresses.map((tokenAddress) => ({
      contract: new Contract(tokenAddress, ERC20_ABI),
      method: "balanceOf",
      args: [address],
    }))
  )
}
