import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';

import { Paper } from '@material-ui/core';
import FormatListBulletedTwoTone from '@material-ui/icons/FormatListBulletedTwoTone';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons//KeyboardArrowDown';
import TablePagination from '@material-ui/core/TablePagination';
import ListCard from '../Test/Card';
import './_index.scss';
import ViewTitle from '../../components/ViewTitle';
import Download from '../../assets/img/icons/Download.svg';

import { useSelector } from 'react-redux';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { border: '1px solid black' } }} className="row">
        <TableCell align="left" className="bold">
          {row.date}
        </TableCell>

        <TableCell className="bold" component="th" align="left" scope="row">
          {row.name}
        </TableCell>

        <TableCell align="left" className="bold">
          <span className={` '' ${row.duration === 'Absent' ? 'absentenfant' : ''}`}>
            {' '}
            {row.duration}
          </span>
        </TableCell>

        <TableCell className="icon">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowUpIcon />
            ) : (
              <FormatListBulletedTwoTone className="FormatListBulletedTwoTone" />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody className="date">
                  <TableRow>
                    <div className="list">
                      <div className="detail">
                        <span>Par Professeur</span>
                        <div className="niveaux">
                          <div>Niveaux:</div>
                          <div className="niveauxx">
                            <span className="niveau">niveaux1</span>
                            <span className="niveau">niveaux2</span>
                            <span className="niveau">niveaux3</span>
                          </div>
                        </div>
                      </div>
                      <div className="piece_joint_en_direct">
                        <div className="piecejoint">Pieces jointes</div>
                        <div className="telecharger_en_direct">
                          <div>
                            <div className="fichier_en_direct">
                              <div className="fichiers_en_direct">Fichier n 1</div>
                            </div>
                          </div>
                          <div>
                            <button className="en-direct-button">
                              <img src={Download} className="download_icon_en_direct" alt="" />
                              <div className="download">Télecharger</div>
                            </button>
                          </div>
                        </div>
                        <div className="telecharger_en_direct">
                          <div>
                            <div className="fichier_en_direct">
                              <div className="fichiers_en_direct">Fichier n 1</div>
                            </div>
                          </div>
                          <div>
                            <button className="en-direct-button">
                              <img src={Download} className="download_icon_en_direct" alt="" />
                              <div className="download">Télecharger</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);

  let varvar = students.find((el) => el.id === storedid);
  let mapvar = varvar.sessions;

  return (
    <React.Fragment>
      <ViewTitle title={'Mes enfants'} />
      <ListCard />
      <TableContainer component={Paper} className="table">
        <div className="tous">
          <ViewTitle title={'Séances en direct'} className="view" />
          <div className="downicon">
            <div>Tous</div>
            <div className="KeyboardArrowDownIcon">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>

        <Table aria-label="collapsible table" className="table_container">
          <TableHead className="tablerow">
            <TableRow className="header-en-direct">
              <TableCell className="header">Date</TableCell>
              <TableCell className="header" align="left">
                Nom
              </TableCell>
              <TableCell className="header" align="left">
                Durée
              </TableCell>

              <TableCell align="right" className="header">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="date">
            {mapvar.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Row align="right" className="date" key={Math.random()} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component="div"
          count={mapvar.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </React.Fragment>
  );
}
