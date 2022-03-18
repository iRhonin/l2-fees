import { Context } from '@cryptostats/sdk';
import sdk from 'data/sdk';
import { getEthPrice } from './utils';

const ARB_GAS_PRECOMPILE = '0x000000000000000000000000000000000000006C';

const ARB_GAS_ABI = [
  'function getPricesInWei() external view returns (uint256,uint256,uint256,uint256,uint256,uint256)',
];

let arbitrumGasPrice: number;

export const getArbitrumGasPrice = async () => {
  if (!arbitrumGasPrice) {
    const gasPrecompileContract = sdk.ethers.getContract(
      ARB_GAS_PRECOMPILE,
      ARB_GAS_ABI,
      'arbitrum-one'
    );
    arbitrumGasPrice = (await gasPrecompileContract.getPricesInWei())[5];
  }
  return arbitrumGasPrice;
};

export function setup(sdk: Context) {
  const getFeeResolverForCost = (gasAmt: number) => async () => {
    const [weiPerArbGas, ethPrice] = await Promise.all([getArbitrumGasPrice(), getEthPrice()]);
    return (weiPerArbGas * gasAmt * ethPrice) / 1e18;
  };

  sdk.register({
    id: 'arbitrum-one',
    queries: {
      feeTransferEth: getFeeResolverForCost(412620),
      feeSwap: getFeeResolverForCost(708377),
      feeTransferERC20: getFeeResolverForCost(534848),
      feeUniswapV3SwapEthToUsdc: getFeeResolverForCost(665117),
      feeUniswapV3AddLiquidityEthUsdc: getFeeResolverForCost(1734848),
      feeUniswapV3RemoveLiquidityEthUsdc: getFeeResolverForCost(1070865),
      //   fee1inchSwapEthToUsdc: null,
      feeSushiSwapEthToUsdc: getFeeResolverForCost(706905),
      //   feeMatchaEthUsdc: getFeeResolverForCost(141374),
      feeHopSendEth: getFeeResolverForCost(684951),
      feexPollinateSendEth: getFeeResolverForCost(1840666 + 1568632),
      feeAaveDepositEth: getFeeResolverForCost(641649),
      feeAaveWithdrawEth: getFeeResolverForCost(562793),
      feeAaveBarrowEth: getFeeResolverForCost(966227),
      feeTorrnaoCashDepositEth: getFeeResolverForCost(1297960),
      feeTorrnaoCashWithdrawEth: getFeeResolverForCost(623220),
      feeBalancerSwap: getFeeResolverForCost(817836),
      feeBalancerAddLiquidity: getFeeResolverForCost(1123305),
      feeBalancerRemoveLiquidity: getFeeResolverForCost(1008976),
      feeCreamSupplyUsdc: getFeeResolverForCost(607827),
      feeCreamBarrowUsdc: getFeeResolverForCost(835247),
      feeCreamRepayUsdc: getFeeResolverForCost(541572),
      feeCreamEnterMarket: getFeeResolverForCost(643418),
      feeCreamExitMarket: getFeeResolverForCost(490108),
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
