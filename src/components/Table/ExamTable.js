import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import './_tablehistory.scss';

const ExamTable = () => {
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

  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);

  let storeData = students.find((el) => el.id === storedid);
  let mapData = storeData.examens;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead className="TableHeader">
          <TableRow>
            {<StyledTableCell align="left">Date&nbsp;</StyledTableCell>}
            {<StyledTableCell align="left">Nom&nbsp;</StyledTableCell>}
            {<StyledTableCell align="left">Matiere&nbsp;</StyledTableCell>}
            {<StyledTableCell align="right">Note&nbsp;</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {mapData.map((row) => (
            <StyledTableRow key={Math.random()}>
              {<StyledTableCell align="left">{row.dateExam}</StyledTableCell>}
              {<StyledTableCell align="left">{row.session}</StyledTableCell>}
              {<StyledTableCell align="left">{row.subject}</StyledTableCell>}
              {<StyledTableCell align="right">{row.mark}</StyledTableCell>}
            </StyledTableRow>
          ))}
          <StyledTableRow></StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ExamTable;
