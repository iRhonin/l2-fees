import { Context } from '@cryptostats/sdk';

let ethPrice: number;

export const getEthPrice = async (sdk: Context) => {
  if (!ethPrice) {
    ethPrice = await sdk.coinGecko.getCurrentPrice('ethereum');
    // setTimeout(() => (ethPrice = null), 60 * 5 * 1000);
  }
  return ethPrice;
};
