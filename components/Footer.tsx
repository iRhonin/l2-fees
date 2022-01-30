import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Data updates continuously</div>

      <div>
        💪 Powered by <a href="https://cryptostats.community">CryptoStats</a>
        {' | '}
        ❤️ Fork of <a href="https://l2fees.info">l2fees.info</a>
        {' | '}
        <a href="https://github.com/iRhonin/l2-now">GitHub</a>
      </div>

      {/* <div>
        <b>l2fees.info</b>
        {' | '}
        <a href="https://cryptofees.info">cryptofees.info</a>
        {' | '}
        <a href="https://ethburned.info">ethburned.info</a>
        {' | '}
        <a href="https://money-movers.info">money-movers.info</a>
        {' | '}
        <a href="https://openorgs.info">openorgs.info</a>
      </div> */}
      <style jsx>{`
        footer {
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
