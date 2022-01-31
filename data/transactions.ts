export interface TransactionType {
  name: string;
  labels: Array<string>;
  interaction: string;
  subRows?: TransactionType;
}

const Transactions: { [key: string]: TransactionType } = {
  feeTransferEth: {
    name: 'ETH',
    labels: [''],
    interaction: 'Transfer',
  },
  feeTransferERC20: {
    name: 'USDC',
    labels: ['ERC20'],
    interaction: 'Transfer',
  },
  feeSwap: {
    name: 'Swap',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
  },
  feeUniswapV3SwapEthToUsdc: {
    name: 'Uniswap V3',
    labels: ['AMM', 'DEX'],
    interaction: 'Swap ETH+USDC',
  },
  feeUniswapV3AddLiquidityEthUsdc: {
    name: 'Uniswap V3',
    labels: ['AMM', 'DEX'],
    interaction: 'Add ETH+USDC',
  },
  feeUniswapV3RemoveLiquidityEthUsdc: {
    name: 'Uniswap V3',
    labels: ['AMM', 'DEX'],
    interaction: 'Remove ETH+USDC',
  },
  fee1inchSwapEthToUsdc: {
    name: '1inch',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
  },
  feeSushiSwapEthToUsdc: {
    name: 'SushiSwap',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
  },
  feeMatchaEthUsdc: {
    name: 'Matcha',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
  },
  feeHopSendEth: {
    name: 'Hop',
    labels: ['Bridge'],
    interaction: 'Bridge ETH',
  },
  feexPollinateSendEth: {
    name: 'xPollinate',
    labels: ['Bridge'],
    interaction: 'Bridge ETH',
  },
  feeTorrnaoCashDepositEth: {
    name: 'TorrnadoCash',
    labels: ['Anonymous-Transfer'],
    interaction: 'Deposit ETH',
  },
  feeTorrnaoCashWithdrawEth: {
    name: 'TorrnadoCash',
    labels: ['Anonymous-Transfer'],
    interaction: 'Withdraw ETH',
  },
  feeAaveV2DepositEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Deposit ETH',
  },
  feeAaveV2WithdrawEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Withdraw ETH',
  },
  feeAaveV2BarrowEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Barrow ETH',
  },
};

export default Transactions;
