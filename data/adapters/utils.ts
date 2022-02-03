import sdk from 'data/sdk';

let ethPrice: number;

export const getEthPrice = async () => {
  if (!ethPrice) {
    ethPrice = await sdk.coinGecko.getCurrentPrice('ethereum');
    setTimeout(() => (ethPrice = undefined), 60 * 5 * 1000);
  }
  return ethPrice;
};

let gasData;

export const getEthGasPrice = async () => {
  if (!gasData) {
    gasData = await sdk.http.get('https://app.defisaver.com/api/gas-price/current');
    setTimeout(() => (gasData = undefined), 60 * 5 * 1000);
  }
  return gasData;
};

let optimisimGasPrice: number;

export async function getOptimisimGasPrice(provider) {
  if (!optimisimGasPrice) {
    optimisimGasPrice = await provider.getGasPrice();
    setTimeout(() => (optimisimGasPrice = undefined), 60 * 5 * 1000);
  }
  return optimisimGasPrice;
}
