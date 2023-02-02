import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import ListCard from '../Test/Card';
import { Grid, Card } from '@material-ui/core';
import Calendar from './calendar';
import './Calendar.css';
import KeyboardArrowDownIcon from '@material-ui/icons//KeyboardArrowDown';

const Index = () => {
  return (
    <>
      <div>
        <ViewTitle title={'Mes enfants'} />
        <ListCard />
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Card className="Calendar-card">
            <div className="tous">
              <ViewTitle className="calendar-title" title={'Travail a faire'} />
              <div className="downicon">
                <div>Tous</div>
                <div className="KeyboardArrowDownIcon">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
            <Calendar />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
