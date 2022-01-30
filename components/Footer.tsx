import React from 'react';
import Button from './Button';
import gtc from 'components/icons/gtc.svg';

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

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Data updates continuously</div>
      <Button Icon={GTCIcon} target="gitcoin" href="https://gitcoin.co/grants/1624/cryptofeesinfo">
        Support CryptoFees.info on Gitcoin
      </Button>
      <div>
        💪 Powered by <a href="https://cryptostats.community">CryptoStats</a>
        {' | '}
        ❤️ Fork of <a href="https://l2fees.info">l2fees.info</a>
        {' | '}
        <a href="https://github.com/iRhonin/l2-now">GitHub</a>
      </div>

      <div>
        <a href="https://l2fees.info">l2fees.info</a>
        {' | '}
        <a href="https://cryptofees.info">cryptofees.info</a>
        {' | '}
        <a href="https://ethburned.info">ethburned.info</a>
        {' | '}
        <a href="https://money-movers.info">money-movers.info</a>
        {' | '}
        <a href="https://openorgs.info">openorgs.info</a>
      </div>
      <style jsx>{`
        footer {
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
