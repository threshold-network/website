import { providers } from "ethers"

// TODO: Set correct Infura url.
const INFURA_URL =
  "https://mainnet.infura.io/v3/516388dd1eef4788a9eecc8b7f121ad7"

export const defaultWeb3Provider = new providers.JsonRpcProvider(INFURA_URL)
