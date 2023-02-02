import React from 'react';
import Grid from '@mui/material/Grid';
import './_index.scss';
import KeyboardArrowDownIcon from '@material-ui/icons//KeyboardArrowDown';
import ViewTitle from '../../components/ViewTitle';
import { Card } from '@material-ui/core';
import { useSelector } from 'react-redux';

const ExamDetails = (props) => {
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);

  let varvar = students.find((el) => el.id === storedid);
  let mapvar = varvar.examens;
  console.log(mapvar);

  return (
    <Card className="examen-card">
      <Grid container>
        <div className="ExamHeader">
          <div>
            <ViewTitle className="examen" title={'Examens'} />
          </div>
          <div className="tous">
            <div className="downicon">
              <div>Tous</div>
              <div className="KeyboardArrowDownIcon">
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
        </div>
        <Grid
          className="container2"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {mapvar.map((row) => (
            <Grid item md={6} xs={12}>
              <div className="box">
                <span className="button">Matiére</span>
                <span className="examTitle">{row.numeroExamen}</span>
                <div className="spaceBetween">
                  <span className="professorTitle">{row.Prof}</span>
                  <span className="dateTitle">Date Fin: {row.dateFin}</span>
                </div>
                <div className="parent">
                  <span className="filler"></span>
                  <div className="detailsTitle" onClick={props.onClick}>
                    Voir détails
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};
export default ExamDetails;
