import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Check from '../../assets/img/icons/Check.svg';
import './_tablehistory.scss';
import TablePagination from '@material-ui/core/TablePagination';

const HISTORIQUE_DES_POINTS = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#EBEBF3',
      color: '#ABABB0',
      padding: 3,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      margin: 10,
      padding: 5,
      fontWeight: 'bold',
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {},
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const HistoryRows = [
    createHistoryPoints('TT2131266309145', 'mode', '500', '...', '28/01/2022 16:00'),
    createHistoryPoints('TT2131266309145', 'mode', '500', '...', '28/01/2022 16:00'),
    createHistoryPoints('TT2131266309145', 'mode', '500', '...', '28/01/2022 16:00'),
    createHistoryPoints('TT2131266309145', 'mode', '500', '...', '28/01/2022 16:00'),
    createHistoryPoints('TT2131266309145', 'mode', '500', '...', '28/01/2022 16:00'),
    createHistoryPoints('TT2131266309145', 'mode', '500', '...', '28/01/2022 16:00'),
  ];
  function createHistoryPoints(code, mode, montant, description, dateHistory, Status) {
    return { code, mode, montant, description, dateHistory, Status };
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead className="TableHeader">
            <TableRow>
              {<StyledTableCell align="left">Code&nbsp;</StyledTableCell>}
              {<StyledTableCell align="left">Mode de paiement&nbsp;</StyledTableCell>}
              {<StyledTableCell align="left">Montant en dinars&nbsp;</StyledTableCell>}
              {<StyledTableCell align="left">Description&nbsp;</StyledTableCell>}
              {<StyledTableCell align="left">Date&nbsp;</StyledTableCell>}
              {<StyledTableCell align="right">Status</StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {HistoryRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <StyledTableRow key={row.code}>
                {
                  <StyledTableCell align="left" component="th" scope="row">
                    {row.code}
                  </StyledTableCell>
                }
                {<StyledTableCell align="left">{row.mode}</StyledTableCell>}
                {<StyledTableCell align="left">{row.montant}</StyledTableCell>}
                {<StyledTableCell align="left">{row.description}</StyledTableCell>}
                {<StyledTableCell align="left">{row.dateHistory}</StyledTableCell>}
                {
                  <StyledTableCell align="right">
                    <img src={Check} className="checkimage" alt="" />{' '}
                  </StyledTableCell>
                }
              </StyledTableRow>
            ))}
            <StyledTableRow></StyledTableRow>
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component="div"
          count={HistoryRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};
export default HISTORIQUE_DES_POINTS;
