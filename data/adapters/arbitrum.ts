import { Context } from '@cryptostats/sdk';

const ARB_GAS_PRECOMPILE = '0x000000000000000000000000000000000000006C';

const ARB_GAS_ABI = [
  'function getPricesInWei() external view returns (uint256,uint256,uint256,uint256,uint256,uint256)',
];

let ethPrice = null;

export function setup(sdk: Context) {
  const getEthPrice = async () => {
    if (!ethPrice) ethPrice = await sdk.coinGecko.getCurrentPrice('ethereum');
    return ethPrice;
  };

  const getFeeResolverForCost = (gasAmt: number) => async () => {
    const gasPrecompileContract = sdk.ethers.getContract(
      ARB_GAS_PRECOMPILE,
      ARB_GAS_ABI,
      'arbitrum-one'
    );

    const weiPerArbGas = (await gasPrecompileContract.getPricesInWei())[5];
    const ethPrice = await getEthPrice();
    return (weiPerArbGas * gasAmt * ethPrice) / 1e18;
  };

  sdk.plugins;
  sdk.register({
    id: 'arbitrum-one-plus',
    queries: {
      feeTransferEth: getFeeResolverForCost(412620),
      feeTransferERC20: getFeeResolverForCost(708377),
      feeUniswapV3SwapEthToUsdc: getFeeResolverForCost(665117),
      feeUniswapV3AddLiquidityEthUsdc: getFeeResolverForCost(1734848),
      feeUniswapV3RemoveLiquidityEthUsdc: getFeeResolverForCost(1070865),
      //   fee1inchSwapEthToUsdc: null,
      feeSushiSwapEthToUsdc: getFeeResolverForCost(706905),
      //   feeMatchaEthUsdc: getFeeResolverForCost(141374),
      feeHopSendEth: getFeeResolverForCost(684951),
      feexPollinateSendEth: getFeeResolverForCost(1840666 + 1568632),
      //   feeAaveV2DepositEth: getFeeResolverForCost(240970),
      //   feeAaveV2WithdrawEth: getFeeResolverForCost(902530),
      //   feeAaveV2BarrowEth: getFeeResolverForCost(454266),
      feeTorrnaoCashDepositEth: getFeeResolverForCost(1297960),
      feeTorrnaoCashWithdrawEth: getFeeResolverForCost(623220),
    },
    metadata: {
      icon: sdk.ipfs.getDataURILoader(
        'QmeRunQGxv3haLoMfgwD2VjKwScf7gDQiA1DCYd1HNBCG6',
        'image/svg+xml'
      ),
      category: 'l2',
      name: 'Arbitrum One',
      description:
        'Arbitrum is an Optimistic Rollup that aims to feel exactly like interacting with Ethereum, but with transactions costing a fraction of what they do on L1.',
      l2BeatSlug: 'arbitrum',
      website: 'https://offchainlabs.com',
      flags: {
        throtle:
          'Arbitrum One is throttled while in beta. Fees will decrease as this throttle is lifted.',
      },
    },
  });
}
