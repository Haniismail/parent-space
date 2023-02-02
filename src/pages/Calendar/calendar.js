import React, { Component } from 'react';
import Scheduler from './Schedular';
import { Grid } from '@material-ui/core';
import './Calendar.css';

const data = [
  {
    start_date: '2022-01-24 19:30',
    end_date: '2022-01-24 21:00',
    text: 'Maths(DD)',
    id: 1,
  },
  {
    start_date: '2022-01-25 19:30',
    end_date: '2022-01-25 21:00',
    text: 'Maths (Stan ...)',
    id: 2,
  },
  {
    start_date: '2022-01-27 19:30',
    end_date: '2022-01-27 21:00',
    text: 'Maths(DD)',
    id: 3,
  },
  {
    start_date: '2022-01-28 18:00',
    end_date: '2022-01-28 19:30',
    text: 'Maths (Stan ...)',
    id: 4,
  },
];

class App extends Component {
  state = {
    currentTimeFormatState: true,
    messages: [],
  };

  render() {
    const { currentTimeFormatState } = this.state;
    return (
      <>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="scheduler-container">
              <Scheduler
                events={data}
                timeFormatState={currentTimeFormatState}
                onDataUpdated={this.logDataUpdate}
                startDayHour={8}
                endDayHour={23}
              />
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default App;
