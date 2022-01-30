import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import 'data/adapters';
import sdk from 'data/sdk';
import List from 'components/List';
import Button from 'components/Button';
import SocialTags from 'components/SocialTags';
import gtc from 'components/icons/gtc.svg';

interface HomeProps {
  data: any[];
}

const GTCIcon: React.FC = () => (
  <div className="gtc">
    <style jsx>{`
      .gtc {
        background: url('${gtc}');
        height: 18px;
        width: 18px;
        margin-right: 2px;
        flex: 0 0 18px;
      }
    `}</style>
  </div>
);

export const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <main>
      <SocialTags />

      <h1 className="title">L1 vs L2s</h1>

      {/* <p className="description">More L1 vs L2s comparison</p> */}

      <p className="heart">
        <a href="https://l2fees.info">l2fees.info</a>
        {' + '}
        Gasnow.org
        {' = ❤️'}
      </p>

      <Button Icon={GTCIcon} target="gitcoin" href="https://gitcoin.co/grants/1624/cryptofeesinfo">
        Support CryptoFees.info on Gitcoin
      </Button>

      <List data={data} />

      <style jsx>{`
        main {
          padding: 2rem 0 3rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .title {
          margin: 0 0 16px;
          line-height: 1.15;
          font-size: 4rem;
          font-weight: 700;
        }

        .title,
        .description {
          text-align: center;
          max-width: 800px;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 4px 0 20px;
        }

        .heart {
          margin: 0 0 18px 0;
          font-size: 18px;
          font-style: italic;
        }
      `}</style>
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const list = sdk.getList('l2-fees');
  const data = await list.executeQueriesWithMetadata(
    [
      'feeTransferEth',
      'feeTransferERC20',
      'feeSwap',
      'feeUniswapV3SwapEthToUsdc',
      'feeUniswapV3AddLiquidityEthUsdc',
      'feeUniswapV3RemoveLiquidityEthUsdc',
      'fee1inchSwapEthToUsdc',
      'feeSushiSwapEthToUsdc',
      'feeMatchaEthUsdc',
      'feeHopSendEth',
      'feexPollinateSendEth',
      'feeAaveV2DepositEth',
      'feeAaveV2WithdrawEth',
      'feeAaveV2BarrowEth',
      'feeTorrnaoCashDepositEth',
      'feeTorrnaoCashWithdrawEth',
    ],
    { allowMissingQuery: true }
  );

  return { props: { data }, revalidate: 5 * 60 };
};

export default Home;
