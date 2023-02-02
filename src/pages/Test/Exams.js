import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import Table from '../../components/Table/Table';
import { Grid, Card } from '@material-ui/core';
import rightarrow from '../../assets/img/icons/rightarrow.svg';
import './Progression-Exams.scss';
import { Link } from 'react-router-dom';

const Exams = () => {
  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Card className="card_exam">
          <div className="seance_stat">
            <div>
              <ViewTitle title={'Examens'} className="title-stat" />
              <div className="seance-stat-line"></div>
            </div>
            <Link to="/examens">
              <div className="Voir-plus">
                <div className="voir">Voir plus</div>
                <div>
                  <img src={rightarrow} alt="" className="rightarrow" />
                </div>
              </div>
            </Link>
          </div>
          <div className="ExamTable">
            <Table examtable />
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Exams;
