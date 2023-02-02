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

const HISTORIQUE_TRANSFERT_POINTS = () => {
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

  function TransferHisotyPoints(Idexpeditor, IdDestination, Points, SentOn, Status) {
    return { Idexpeditor, IdDestination, Points, SentOn, Status };
  }
  const TransferPoints = [
    TransferHisotyPoints('Moi', '#168872', '445', '28/01/2022 16:00'),
    TransferHisotyPoints('Moi', '#168872', '582', '28/01/2022 16:00'),
    TransferHisotyPoints('#168872', 'Moi', '20', '28/01/2022 16:00'),
    TransferHisotyPoints('#168872', 'Moi', '40', '28/01/2022 16:00'),
    TransferHisotyPoints('Moi', '#168872', '650', '28/01/2022 16:00'),
    TransferHisotyPoints('Moi', '#168872', '650', '28/01/2022 16:00'),
  ];

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
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead className="TableHeader">
          <TableRow>
            {<StyledTableCell align="left">Idexpeditor&nbsp;</StyledTableCell>}
            {<StyledTableCell align="left">IdDestination&nbsp;</StyledTableCell>}
            {<StyledTableCell align="left">Points&nbsp;</StyledTableCell>}
            {<StyledTableCell align="left">SentOn&nbsp;</StyledTableCell>}
            {<StyledTableCell align="right">Status</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {TransferPoints.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <StyledTableRow key={row.Idexpeditor}>
              {
                <StyledTableCell align="left" component="th" scope="row">
                  {row.Idexpeditor}
                </StyledTableCell>
              }
              {<StyledTableCell align="left">{row.IdDestination}</StyledTableCell>}
              {<StyledTableCell align="left">{row.Points}</StyledTableCell>}
              {<StyledTableCell align="left">{row.SentOn}</StyledTableCell>}
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
        count={TransferPoints.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
export default HISTORIQUE_TRANSFERT_POINTS;
