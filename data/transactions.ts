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
    name: 'TornadoCash',
    labels: ['Anonymous-Transfer'],
    interaction: 'Deposit ETH',
  },
  feeTorrnaoCashWithdrawEth: {
    name: 'TornadoCash',
    labels: ['Anonymous-Transfer'],
    interaction: 'Withdraw ETH',
  },
  feeAaveDepositEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Deposit ETH',
  },
  feeAaveWithdrawEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Withdraw ETH',
  },
  feeAaveBarrowEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Barrow ETH',
  },
  feeSynthetixMintSusd: {
    name: 'Synthetix',
    labels: ['Derivatives'],
    interaction: 'Mint sUsd',
  },
  feeSynthetixBurnSusd: {
    name: 'Synthetix',
    labels: ['Derivatives'],
    interaction: 'Burn sUsd',
  },
  feeSynthetixClaimFees: {
    name: 'Synthetix',
    labels: ['Derivatives'],
    interaction: 'Claim Fees',
  },
  feeBalancerSwap: {
    name: 'Balancer',
    labels: ['DEX', 'AMM'],
    interaction: 'Swap ETH+USDC',
  },
  feeBalancerAddLiquidity: {
    name: 'Balancer',
    labels: ['DEX', 'AMM'],
    interaction: 'Add DAI+USDC+UDST',
  },
  feeBalancerRemoveLiquidity: {
    name: 'Balancer',
    labels: ['DEX', 'AMM'],
    interaction: 'Remove DAI+USDC+UDST',
  },
  feeCreamSupplyUsdc: {
    name: 'Cream',
    labels: ['Lending'],
    interaction: 'Supply USDC',
  },
  feeCreamBarrowUsdc: {
    name: 'Cream',
    labels: ['Lending'],
    interaction: 'Barrow USDC',
  },
  feeCreamRepayUsdc: {
    name: 'Cream',
    labels: ['Lending'],
    interaction: 'Repay USDC',
  },
  feeCreamEnterMarket: {
    name: 'Cream',
    labels: ['Lending'],
    interaction: 'Enter Market',
  },
  feeCreamExitMarket: {
    name: 'Cream',
    labels: ['Lending'],
    interaction: 'Exit Market',
  },
};

export default Transactions;
