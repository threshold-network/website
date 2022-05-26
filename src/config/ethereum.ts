import { providers } from "ethers"

// TODO: Set correct Infura url.
const INFURA_URL =
  "https://mainnet.infura.io/v3/c80e8ccdcc4c4a809bce4fc165310617"

export const defaultWeb3Provider = new providers.JsonRpcProvider(INFURA_URL)
