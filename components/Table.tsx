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
    fontSize: 18,
    borderRight: 1,
  },
  body: {
    fontSize: 18,
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
        {headerGroups.map((headerGroup) => (
          <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <StyledTableCell key={column} align="center" {...column.getHeaderProps()}>
                {column.render('Header')}
              </StyledTableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <StyledTableRow key={row.name} {...row.getRowProps()}>
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
