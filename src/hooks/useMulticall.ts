import { useCallback } from "react"
import { Contract } from "ethers"
import { defaultWeb3Provider } from "../config/ethereum"

interface ContractCall {
  contract: Contract
  method: string
  args?: any[]
}

const MULTICALL_ABI = [
  "function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)",
  "function getEthBalance(address addr) view returns (uint256 balance)",
]

// Address exported from:
// https://github.com/makerdao/multicall#multicall-contract-addresses
const MULTICALL_ADDRESS = "0xeefba1e63905ef1d7acba5a8513c70307c1ce441"

const multicallContract = new Contract(
  MULTICALL_ADDRESS,
  MULTICALL_ABI,
  defaultWeb3Provider
)

export const useMulticall = (calls: ContractCall[]) => {
  const callRequests = calls.map((_) => [
    _.contract?.address,
    _.contract?.interface.encodeFunctionData(_.method, _.args),
  ])

  return useCallback(async () => {
    if (!multicallContract || !callRequests || callRequests.length === 0) {
      return []
    }

    const [, result] = await multicallContract.aggregate(callRequests)
    return result.map((data: string, index: number) => {
      const call = calls[index]
      return call.contract.interface.decodeFunctionResult(call.method, data)
    })
  }, [JSON.stringify(callRequests), multicallContract])
}
