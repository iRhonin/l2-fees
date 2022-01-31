import React from 'react';

import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import { useTable, useExpanded } from 'react-table';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#ddd',
    color: '#222',
    fontSize: '1.2em',
    borderRight: 1,
  },
  body: {
    fontSize: '1.2em',
  },
}))(TableCell);

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useExpanded
  );

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        <TableRow key={headerGroups[1]} {...headerGroups[1].getHeaderGroupProps()}>
          {headerGroups[1].headers.map((column) => (
            <StyledTableCell key={column} align="center" {...column.getHeaderProps()}>
              {column.render('Header')}
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <StyledTableRow
              key={row.name}
              {...row.getRowProps()}
              onClick={() => row.toggleRowExpanded()}
            >
              {row.cells.map((cell) => {
                return (
                  <StyledTableCell key={cell} align="center" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
}

export default Table;
