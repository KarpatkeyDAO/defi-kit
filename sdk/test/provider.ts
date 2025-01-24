import { JsonRpcProvider } from "ethers"
import { ANVIL_PORTS } from "./chains"
import { Chain } from "../src"

let provider: JsonRpcProvider
export const getProvider = (chain: Chain) => {
  if (!provider) {
    provider = new JsonRpcProvider(`http://127.0.0.1:${ANVIL_PORTS[chain]}`)
  }
  return provider
}
