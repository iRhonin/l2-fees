import React, { useMemo } from 'react';
import Table from './Table';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Row from './Row';
import icons from './icons';
import SimpleRow from './SimpleRow';

interface ListProps {
  data: any[];
}

interface TransactionType {
  name: string;
  labels: Array<string>;
  interaction: string;
  icon: string;
}

const Transactions: { [key: string]: TransactionType } = {
  feeTransferEth: {
    name: 'ETH',
    labels: [''],
    interaction: 'Transfer',
    icon: '',
  },
  feeTransferERC20: {
    name: 'USDC',
    labels: ['ERC20'],
    interaction: 'Transfer',
    icon: '',
  },
  feeSwap: {
    name: 'Swap',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
    icon: '',
  },
  feeUniswapV3SwapEthToUsdc: {
    name: 'Uniswap V3',
    labels: ['AMM', 'DEX'],
    interaction: 'Swap ETH+USDC',
    icon: '',
  },
  feeUniswapV3AddLiquidityEthUsdc: {
    name: 'Uniswap V3',
    labels: ['AMM', 'DEX'],
    interaction: 'Add ETH+USDC',
    icon: '',
  },
  feeUniswapV3RemoveLiquidityEthUsdc: {
    name: 'Uniswap V3',
    labels: ['AMM', 'DEX'],
    interaction: 'Remove ETH+USDC',
    icon: '',
  },
  fee1inchSwapEthToUsdc: {
    name: '1inch',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
    icon: '',
  },
  feeSushiSwapEthToUsdc: {
    name: 'SushiSwap',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
    icon: '',
  },
  feeMatchaEthUsdc: {
    name: 'Matcha',
    labels: ['DEX'],
    interaction: 'Swap ETH+USDC',
    icon: '',
  },
  feeHopSendEth: {
    name: 'Hop',
    labels: ['Bridge'],
    interaction: 'Bridge ETH',
    icon: '',
  },
  feexPollinateSendEth: {
    name: 'xPollinate',
    labels: ['Bridge'],
    interaction: 'Bridge ETH',
    icon: '',
  },
  feeAaveV2DepositEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Deposit ETH',
    icon: '',
  },
  feeAaveV2WithdrawEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Withdraw ETH',
    icon: '',
  },
  feeAaveV2BarrowEth: {
    name: 'Aave',
    labels: ['Lending'],
    interaction: 'Barrow ETH',
    icon: '',
  },
  feeTorrnaoCashDepositEth: {
    name: 'TorrnadoCash',
    labels: ['Anonymous-Transfer'],
    interaction: 'Deposit ETH',
    icon: '',
  },
  feeTorrnaoCashWithdrawEth: {
    name: 'TorrnadoCash',
    labels: ['Anonymous-Transfer'],
    interaction: 'Withdraw ETH',
    icon: '',
  },
};

const List: React.FC<ListProps> = ({ data }) => {
  const aggregatedData = useMemo(() => {
    const _data = {};

    data.forEach((network) => {
      for (const q in network.results) {
        _data[q] = {
          ..._data[q],
          name: Transactions[q].name,
          interaction: Transactions[q].interaction,
        };

        _data[q][network.metadata.l2BeatSlug] =
          network.results[q] === null ||
          network.results[q] === undefined ||
          network.results[q] === ''
            ? '-'
            : network.results[q] > 0.01
            ? '$' + network.results[q].toFixed(2)
            : '< $0.01';
      }
    });

    const result = {};
    Object.values(_data).forEach((item) => {
      if (!result[item.name]) result[item.name] = { ...item, subRows: [] };
      else result[item.name].subRows.push({ ...item, name: '' });
    });

    return Object.values(result);
  }, [data]);

  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  // paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          ) : null,
      },
      {
        Header: 'Transaction',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            maxWidth: 70,
            minWidth: 70,
            Cell: (props) => (
              <SimpleRow
                name={props.value}
                icon={
                  props.value === '1inch'
                    ? icons.oneinch
                    : icons[props.value.replaceAll(' ', '_').toLowerCase()]
                }
              />
            ),
          },
          {
            Header: 'Interaction',
            accessor: 'interaction',
          },
        ],
      },
      {
        Header: 'Networks',
        columns: data.map((protocol) => ({
          Header: <Row protocol={protocol} />,
          accessor: protocol.metadata.l2BeatSlug,
        })),
      },
    ],
    []
  );

  return (
    <div className="list">
      <Table columns={columns} data={aggregatedData} />
      {/* <div className="header">
        <div className="name">Name</div>
        <div className="amount">{headers[query]}</div>
      </div>


      {sortedData.map((protocol: any) => (
        <Row protocol={protocol} key={protocol.id} query={query} />
      ))} */}

      <style jsx>{`
        .list {
          border: solid 1px lightGray;
          border-radius: 0px;
          margin: 4px;
          /* width: 500px; */
          max-width: 100%;
        }

        .header {
          display: flex;
          padding: 0 4px;
          border-bottom: solid 1px lightGray;
          background: #eee;
          font-weight: 500;
          padding-left: 10px;
        }

        .header .amount:hover {
          cursor: pointer;
          background: #eee;
        }

        .item {
          display: flex;
          padding: 0 4px;
          background-color: #fff;
          font-size: 18px;
          background-repeat: no-repeat;
          background-position: 10px center;
          background-size: 20px 20px;
          padding-left: 10px;
        }

        .item.app {
          background-color: #fad3f6;
        }

        .item > div,
        .header > div {
          padding: 16px 32px;
        }

        .name {
          flex: 1;
        }

        .amount {
          min-width: 200px;
          text-align: right;
        }

        @media (max-width: 700px) {
          .header {
            padding-left: 28px;
            padding-right: 30px;
          }
          .header > div {
            font-size: 14px;
          }

          .amount {
            font-size: 16px;
            min-width: 110px;
          }
          .name {
            font-size: 14px;
          }
          .g {
            display: none;
          }

          .item {
            padding-left: 30px;
            padding-right: 0;
            background-position: 6px center;
          }

          .item > div,
          .header > div {
            padding: 8px 2px;
          }
        }
      `}</style>
    </div>
  );
};

export default List;
