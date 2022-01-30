import { Context } from '@cryptostats/sdk';
import { getEthPrice } from './utils';

export function setup(sdk: Context) {
  const getFeeResolverForCost = (gasAmt: number) => async () => {
    const gasData = await sdk.http.get('https://app.defisaver.com/api/gas-price/current');
    const ethPrice = await getEthPrice(sdk);
    return (gasData.regular * gasAmt * ethPrice) / 1e9;
  };

  sdk.register({
    id: 'ethereum',
    queries: {
      feeTransferEth: getFeeResolverForCost(21000),
      feeSwap: getFeeResolverForCost(48000),
      feeTransferERC20: getFeeResolverForCost(48000),
      feeUniswapV3SwapEthToUsdc: getFeeResolverForCost(144348),
      feeUniswapV3AddLiquidityEthUsdc: getFeeResolverForCost(263442),
      feeUniswapV3RemoveLiquidityEthUsdc: getFeeResolverForCost(262926),
      fee1inchSwapEthToUsdc: getFeeResolverForCost(107125),
      feeSushiSwapEthToUsdc: getFeeResolverForCost(117458),
      feeMatchaEthUsdc: getFeeResolverForCost(141374),
      feeHopSendEth: getFeeResolverForCost(124062),
      feexPollinateSendEth: getFeeResolverForCost(99234),
      feeAaveV2DepositEth: getFeeResolverForCost(240970),
      feeAaveV2WithdrawEth: getFeeResolverForCost(902530),
      feeAaveV2BarrowEth: getFeeResolverForCost(454266),
      feeTorrnaoCashDepositEth: getFeeResolverForCost(952910),
      feeTorrnaoCashWithdrawEth: getFeeResolverForCost(376482),
    },
    metadata: {
      icon: sdk.ipfs.getDataURILoader(
        'QmedJLPy6R7x3dDEy2cfMd8gXbZm9e3vxvgBLXp3YZEHCy',
        'image/svg+xml'
      ),
      category: 'l1',
      name: 'Ethereum',
      l2BeatSlug: 'ethereum',
      description: 'Ethereum is the base layer-1 chain.',
      website: 'https://ethereum.org',
    },
  });
}
