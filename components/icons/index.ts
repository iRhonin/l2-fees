import eth from './eth.svg';
import usdc from './usdc.svg';
import swap from './swap.svg';
import uniswap from './uniswap.svg';
import sushiswap from './sushiswap.svg';
import oneinch from './1inch.png';
import matcha from './matcha.webp';
import hop from './hop.png';
import xpollinate from './xpollinate.png';
import aave from './aave.svg';
import torrnadocash from './torrnadocash.png';

// Legacy, don't add new icons here
const icons: { [id: string]: string } = {
  ETH: eth,
  USDC: usdc,
  Swap: swap,
  'Uniswap V3': uniswap,
  SushiSwap: sushiswap,
  '1inch': oneinch,
  Matcha: matcha,
  Hop: hop,
  xPollinate: xpollinate,
  Aave: aave,
  TorrnadoCash: torrnadocash,
};

export default icons;
