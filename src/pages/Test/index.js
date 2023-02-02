import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import ListCard from './Card';
import Seance from './Seance_En_Direct/Seance';
import SEANCE_STATISTIQUE from './Seance_stat/Seance_statistique';
import './Progression-Exams.scss';
import Progression from './Progession';
import Exams from './Exams';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CivilState from './Civil-State';
const Test = () => {
  const PassToDetailsScreen = useSelector((state) => state.ui.PassToDetailsScreen);
  return (
    <>
      <div>
        <ViewTitle title={'Mes enfants'} />
        <ListCard />
      </div>
      {!PassToDetailsScreen && (
        <Grid container>
          <Grid item md={6} xs={12}>
            <div>
              <Seance />
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Progression />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="grid-index">
              <SEANCE_STATISTIQUE />
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Exams />
          </Grid>
        </Grid>
      )}
      {PassToDetailsScreen && <CivilState />}
    </>
  );
};

export default Test;
