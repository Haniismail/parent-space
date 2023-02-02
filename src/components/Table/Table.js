import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './_tablehistory.scss';
import HISTORIQUE_DES_POINTS from './HISTORIQUE_DES_POINTS';
import HISTORIQUE_TRANSFERT_POINTS from './HISTORIQUE_TRANSFERT_POINTS';
import ExamTable from './ExamTable';
import { useSelector } from 'react-redux';

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

/************************************************************************************/

export default function CustomizedTables(props) {
  const { date, nom, duree, historiquetransfertpoints, historiquepoints, examtable } = props;
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);

  let SeanceData = students.find((el) => el.id === storedid);

  let mapData = SeanceData.sessions;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead className="TableHeader">
          <TableRow>
            {date && <StyledTableCell className="TableHeader">Date</StyledTableCell>}
            {nom && <StyledTableCell align="left">Nom</StyledTableCell>}
            {duree && <StyledTableCell align="right">Durée&nbsp;</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {mapData.length !== 0 ? (
            <>
              {mapData.map((row) => (
                <StyledTableRow key={Math.random()}>
                  {date && (
                    <StyledTableCell align="left" component="th" scope="row">
                      {row.date}
                    </StyledTableCell>
                  )}
                  {nom && <StyledTableCell align="left">{row.name}</StyledTableCell>}
                  {duree && (
                    <StyledTableCell align="right">
                      <span className={` '' ${row.duration === 'Absent' ? 'absentenfant' : ''}`}>
                        {' '}
                        {row.duration}
                      </span>
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
              <StyledTableRow></StyledTableRow>
            </>
          ) : (
            ''
          )}
        </TableBody>
      </Table>
      {historiquepoints && <HISTORIQUE_DES_POINTS />}
      {examtable && <ExamTable examtable />}
      {historiquetransfertpoints && <HISTORIQUE_TRANSFERT_POINTS />}
    </TableContainer>
  );
}
