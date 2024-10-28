import { eth } from "."
import { avatar, member } from "../../../../test/wallets"
import { applyPermissions, stealErc20 } from "../../../../test/helpers"
import { contracts } from "../../../../eth-sdk/config"
import { Status } from "../../../../test/types"
import kit from "../../../../test/kit"
import { parseEther, parseUnits } from "ethers"

describe("aave_v2", () => {
  describe("deposit", () => {
    beforeAll(async () => {
      await applyPermissions(await eth.deposit({ targets: ["ETH", "USDC"] }))
    })

    // Test with ETH
    it("only allows depositing ETH on behalf of avatar", async () => {
      await expect(
        kit.asMember.aaveV2.wrappedTokenGatewayV2.depositETH(
          contracts.mainnet.aaveV2.aaveLendingPoolV2,
          avatar.address,
          0,
          { value: parseEther("1") }
        )
      ).not.toRevert()

      await expect(
        kit.asMember.aaveV2.wrappedTokenGatewayV2.depositETH(
          contracts.mainnet.aaveV2.aaveLendingPoolV2,
          member.address,
          0,
          { value: parseEther("1") }
        )
      ).toBeForbidden(Status.ParameterNotAllowed)
    }, 30000) // Added 30 seconds of timeout because the deposit takes too long and the test fails.

    it("only allows withdrawing ETH from avatars' position", async () => {
      await expect(
        kit.asMember.aaveV2.aWETH.approve(
          contracts.mainnet.aaveV2.wrappedTokenGatewayV2,
          parseEther("1")
        )
      ).not.toRevert()

      await expect(
        kit.asMember.aaveV2.wrappedTokenGatewayV2.withdrawETH(
          contracts.mainnet.aaveV2.aaveLendingPoolV2,
          parseEther("1"),
          avatar.address
        )
      ).not.toRevert()

      await expect(
        kit.asMember.aaveV2.wrappedTokenGatewayV2.withdrawETH(
          contracts.mainnet.aaveV2.aaveLendingPoolV2,
          parseEther("1"),
          member.address
        )
      ).toBeForbidden(Status.ParameterNotAllowed)
    })

    it("allow setting the deposited ETH as collateral", async () => {
      let reserve_config: Array<any> =
        await sdk.aaveV2.data_provider.getReserveConfigurationData(
          contracts.mainnet.weth
        )
      const collateralizable: boolean = reserve_config[5]
      console.log("is collateralizable: ", collateralizable)
      if (collateralizable) {
        await expect(
          kit.asMember.aaveV2.aaveLendingPoolV2.setUserUseReserveAsCollateral(
            contracts.mainnet.weth,
            true
          )
        ).not.toRevert()
      } else {
        await expect(
          kit.asMember.aaveV2.aaveLendingPoolV2.setUserUseReserveAsCollateral(
            contracts.mainnet.weth,
            true
          )
        ).toRevert()
      }
    })

    // Test with USDC
    it("only allows depositing USDC on behalf of avatar", async () => {
      await stealErc20(
        contracts.mainnet.usdc,
        parseUnits("1000", 6),
        contracts.mainnet.balancer.vault
      )
      await expect(
        kit.asMember.usdc.approve(
          contracts.mainnet.aaveV2.aaveLendingPoolV2,
          parseUnits("1000", 6)
        )
      ).not.toRevert()

      await expect(
        kit.asMember.aaveV2.aaveLendingPoolV2.deposit(
          contracts.mainnet.usdc,
          parseUnits("1000", 6),
          avatar.address,
          0
        )
      ).not.toRevert()

      await expect(
        kit.asMember.aaveV2.aaveLendingPoolV2.deposit(
          contracts.mainnet.usdc,
          parseUnits("1000", 6),
          member.address,
          0
        )
      ).toBeForbidden(Status.ParameterNotAllowed)
    })

    it("only allows withdrawing USDC from avatars' position", async () => {
      await expect(
        kit.asMember.aaveV2.aaveLendingPoolV2.withdraw(
          contracts.mainnet.usdc,
          parseUnits("1000", 6),
          avatar.address
        )
      ).not.toRevert()

      await expect(
        kit.asMember.aaveV2.aaveLendingPoolV2.withdraw(
          contracts.mainnet.usdc,
          parseUnits("1000", 6),
          member.address
        )
      ).toBeForbidden(Status.ParameterNotAllowed)
    })

    it("allow setting the deposited USDC as collateral", async () => {
      let reserve_config: Array<any> =
        await kit.asAvatar.aaveV2.data_provider.getReserveConfigurationData(
          contracts.mainnet.usdc
        )
      const collateralizable: boolean = reserve_config[5]
      console.log("is collateralizable: ", collateralizable)
      if (collateralizable) {
        await expect(
          kit.asMember.aaveV2.aaveLendingPoolV2.setUserUseReserveAsCollateral(
            contracts.mainnet.usdc,
            true
          )
        ).not.toRevert()
      } else {
        await expect(
          kit.asMember.aaveV2.aaveLendingPoolV2.setUserUseReserveAsCollateral(
            contracts.mainnet.usdc,
            true
          )
        ).toRevert()
      }
    })
  })
})
