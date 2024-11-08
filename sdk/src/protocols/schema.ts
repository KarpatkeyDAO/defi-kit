import * as aaveV2 from "./aave/v2/schema"
import * as aaveV3 from "./aave/v3/schema"
import * as ankr from "./ankr/schema"
import * as aura from "./aura/schema"
import * as balancer from "./balancer/schema"
import * as compoundV2 from "./compound/v2/schema"
// import * as compoundV3 from "./compound/v3/schema"
import * as convex from "./convex/schema"
import * as cowSwap from "./cowSwap/schema"
import * as lido from "./lido/schema"
import * as maker from "./maker/schema"
import * as rocketPool from "./rocketPool/schema"
import * as spark from "./spark/schema"
import * as stader from "./stader/schema"
import * as stakeWiseV2 from "./stakeWise/v2/schema"
import * as uniswapV3 from "./uniswap/v3/schema"
import { ProtocolSchemas } from "../types"

// group all protocols schemas by chain

export const eth = {
  aaveV2: aaveV2.eth,
  aaveV3: aaveV3.eth,
  ankr: ankr.eth,
  aura: aura.eth,
  balancer: balancer.eth,
  compoundV2: compoundV2.eth,
  // compoundV3: compoundV3.eth,
  convex: convex.eth,
  cowSwap: cowSwap.eth,
  lido: lido.eth,
  maker: maker.eth,
  rocketPool: rocketPool.eth,
  spark: spark.eth,
  stader: stader.eth,
  stakeWiseV2: stakeWiseV2.eth,
  uniswapV3: uniswapV3.eth,
} satisfies Record<string, ProtocolSchemas>

export const gno = {
  aaveV3: aaveV3.gno,
  aura: aura.gno,
  balancer: balancer.gno,
  cowSwap: cowSwap.gno,
  spark: spark.gno,
} satisfies Record<string, ProtocolSchemas>

export const arb1 = {
  aaveV3: aaveV3.arb1,
  cowSwap: cowSwap.arb1,
} satisfies Record<string, ProtocolSchemas>
