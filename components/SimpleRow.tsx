import React, { Fragment } from 'react';

interface SimpleRowProps {
  name: string;
  icon: string;
}

const cardHeight = 600;

const SimpleRow: React.FC<SimpleRowProps> = ({ name, icon }) => {
  return (
    <Fragment>
      <a
        className={'item'}
        style={{
          backgroundImage: `url('${icon}')`,
        }}
      >
        <div className="row-name">{name}</div>
      </a>
      <style jsx>{`
        .item {
          display: flex;
          padding: 0 4px;
          /* background-color: #fff; */
          font-size: 1em;
          background-repeat: no-repeat;
          background-position: 10px center;
          background-size: 20px 20px;
          padding-left: 2em;
          color: black;
          text-decoration: none;
          align-items: center;
        }
        .item:hover {
          /* background-color: #f5f5f5; */
        }

        .row-name {
          flex: 1;
          display: flex;
          align-items: center;
        }

        @keyframes slidein {
          from {
            max-height: 0px;
          }

          to {
            max-height: ${cardHeight}px;
          }
        }

        @keyframes slideout {
          from {
            max-height: ${cardHeight}px;
          }

          to {
            max-height: 0px;
          }
        }

        .details-container {
          max-height: ${cardHeight}px;
          animation: 0.5s 1 slidein;
          overflow: hidden;

          border-top: solid 1px #e3e3e3;
          border-bottom: solid 1px #e3e3e3;
          display: flex;
          flex-direction: column;
        }

        .details-container.exit {
          max-height: 0;
          animation: 0.5s 1 slideout;
        }

        @media (max-width: 700px) {
          .amount {
            font-size: 14px;
            min-width: 110px;
            padding-left: 8px;
          }

          .item {
            padding-left: 30px;
            background-position: 6px center;
          }

          .arrow {
            padding: 0 2px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default SimpleRow;
