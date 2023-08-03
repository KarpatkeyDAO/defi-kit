import { EthSdkConfig, defineConfig } from "@dethcrypto/eth-sdk"

export const contracts = {
  mainnet: {
    aaveV2: {
      aaveLendingPoolV2: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      paraSwapRepayAdapter: "0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6",
      wrappedTokenGatewayV2: "0xEFFC18fC3b7eb8E676dac549E0c693ad50D1Ce31",
      variableDebtWETH: "0xF63B34710400CAd3e044cFfDcAb00a0f32E33eCf",
      stableDebtWETH: "0x4e977830ba4bd783C0BB7F15d3e243f73FF57121",
      aave: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      abpt: "0x41A08648C3766F9F9d85598fF102a08f4ef84F84",
      stkaave: "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
      stkabpt: "0xa1116930326D21fB917d5A27F1E9943A9595fb47",
      governanceV2: "0xEC568fffba86c094cf06b22134B23074DFE2252c",
      governanceV2Helper: "0xBb7baf0534423e3108E1D03c259104cDba2C1cB7",
    },
    aaveV3: {
      aaveLendingPoolV3: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
      wrappedTokenGatewayV3: "0xD322A49006FC828F9B5B37Ab215F99B4E5caB19C",
      variableDebtWETH: "0xeA51d7853EEFb32b6ee06b1C12E6dcCA88Be0fFE",
      stableDebtWETH: "0x102633152313C81cD80419b6EcF66d14Ad68949A",
    },
    aura: {
      booster: "0xA57b8d98dAE62B26Ec3bcC4a365338157060B234",
      reward_pool_deposit_wrapper: "0xB188b1CB84Fb0bA13cb9ee1292769F903A9feC59",
      bal_depositor_wrapper: "0x68655AD9852a99C87C0934c7290BB62CFa5D4123",
      b_80bal_20weth_depositor_wrapper:
        "0xeAd792B55340Aa20181A80d6a16db6A0ECd1b827",
      aurabal_staking_rewarder: "0x00A7BA8Ae7bca0B10A32Ea1f8e2a1Da980c6CAd2",
      stkaurabal: "0xfAA2eD111B4F580fCb85C48E6DC6782Dc5FCD7a6",
      aurabal_staker: "0xa3fCaFCa8150636C3B736A16Cd73d49cC8A7E10E",
      aurabal_compounding_rewarder:
        "0xAc16927429c5c7Af63dD75BC9d8a58c63FfD0147",
      aura_locker: "0x3Fa73f1E5d8A792C80F426fc8F84FBF7Ce9bBCAC",
      rewarder: "0x59D66C58E83A26d6a0E35114323f65c3945c89c1",
    },
    compoundV2: {
      comptroller: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
      maximillion: "0xf859A1AD94BcF445A406B892eF0d3082f4174088",
      cToken: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    },
    compoundV3: {
      comet: "0xc3d688B66703497DAA19211EEdff47f25384cdc3",
      MainnetBulker: "0xa397a8C2086C554B531c02E29f3291c9704B00c7",
      CometRewards: "0x1b0e765f6224c21223aea2af16c1c46e38885a40",
    },
    curve: {
      regularPool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      metaPool: "0x4f062658eaaf2c1ccf8c8e36d6824cdf41167956",
    },
    lido: {
      steth: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      wsteth: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
      unsteth: "0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1",
    },
    balancer: {
      relayer: "0xfeA793Aa415061C483D2390414275AD314B3F621",
      relayerLibrary: "0xf77018c0d817dA22caDbDf504C00c0d32cE1e5C2",
      vault: "0xba12222222228d8ba445958a75a0704d566bf2c8",
    },
    makerdao: {
      dai: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      cdp_manager: "0x5ef30b9986345249bc32d8928B7ee64DE9435E39",
      jug: "0x19c0976f590D67707E62397C87829d896Dc0f1F1",
      maker_proxy_actions: "0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038",
      dsr_manager: "0x373238337Bfe1146fb49989fc222523f83081dDb",
      pot: "0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7",
      gem_join_wsteth: "0x10CD5fbe1b404B7E19Ef964B63939907bdaf42E2",
      vat: "0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B",
      dai_join: "0x9759A6Ac90977b93B58547b4A71c78317f391A28",
      dsr_proxy_actions: "0x07ee93aEEa0a36FfF2A9B95dd22Bd6049EE54f26"
    }
  },
  goerli: {
    cowswap: {
      orderSigner: "0xdEb83d81d4a9758A7bAec5749DA863C409ea6C6B",
    },
  },
} satisfies EthSdkConfig["contracts"]

export default defineConfig({
  contracts,
})
