import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import 'data/adapters';
import sdk from 'data/sdk';
import List from 'components/List';
import SocialTags from 'components/SocialTags';
import { FormControlLabel, Switch } from '@material-ui/core';
import queries from 'data/queries';
import { getEthGasPrice, getEthPrice, getOptimisimGasPrice } from 'data/adapters/utils';
import { getArbitrumGasPrice } from 'data/adapters/arbitrum';

interface HomeProps {
  data: any[];
}

export const Home: NextPage<HomeProps> = ({ data }) => {
  const [showRatio, setShowRatio] = React.useState(false);

  return (
    <main>
      <SocialTags />

      <h1 className="title">L1 vs L2s</h1>
      <p className="heart">
        <a href="https://l2fees.info">l2fees.info</a>
        {' + '}
        Gasnow.org
        {' = ❤️'}
      </p>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={showRatio}
              onChange={(e) => setShowRatio(e.target.checked)}
              name="showRatio"
            />
          }
          label="Show how much cheaper L2s are"
        />
      </div>

      <List data={data} showRatio={showRatio} />

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
          display: flex;
        }
      `}</style>
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const list = sdk.getList('l2-fees');

  const optimismProvider = sdk.ethers.getProvider('optimism');
  await Promise.all([
    getEthPrice(),
    getEthGasPrice(),
    getArbitrumGasPrice(),
    getOptimisimGasPrice(optimismProvider),
  ]);

  const data = await list.executeQueriesWithMetadata(queries, { allowMissingQuery: true });
  return { props: { data }, revalidate: 60 };
};

export default Home;
