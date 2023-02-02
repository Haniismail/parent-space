import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css';

const scheduler = window.scheduler;

class Scheduler extends Component {
  initSchedulerEvents() {
    if (scheduler._$initialized) {
      return;
    }

    const onDataUpdated = this.props.onDataUpdated;

    scheduler.attachEvent('onEventAdded', (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated('create', ev, id);
      }
    });

    scheduler.attachEvent('onEventChanged', (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated('update', ev, id);
      }
    });

    scheduler.attachEvent('onEventDeleted', (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated('delete', ev, id);
      }
    });
    scheduler._$initialized = true;
  }

  componentDidMount() {
    scheduler.skin = 'material';
    scheduler.xy.nav_height = 60;
    scheduler.config.header = [
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'prev',
      'date',
      'next',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      'spacer',
      {
        view: 'minicalendar',
        click: function () {
          if (scheduler.isCalendarVisible()) {
            scheduler.destroyCalendar();
          } else {
            scheduler.renderCalendar({
              position: this,
              date: scheduler.getState().date,
              navigation: true,
              handler: function (date, calendar) {
                scheduler.setCurrentView(date);
                scheduler.destroyCalendar();
              },
            });
          }
        },
      },
      'today',
    ];

    //removes double click to create an event
    scheduler.config.dblclick_create = false;
    scheduler.config.day_date = '%l %j  %F';
    scheduler.xy.scale_width = 70;
    scheduler.config.first_hour = 8;
    scheduler.config.last_hour = 24;
    scheduler.config.hour_size_px = 40;

    this.initSchedulerEvents();

    const { events } = this.props;
    scheduler.init(this.schedulerContainer, new Date(2022, 0, 24));
    scheduler.clearAll();
    scheduler.parse(events);
  }

  componentDidUpdate() {
    scheduler.render();
  }

  render() {
    return (
      <div
        ref={(input) => {
          this.schedulerContainer = input;
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <script src="../sources/locale/locale_es.js" charset="utf-8"></script>
      </div>
    );
  }
}

export default Scheduler;
