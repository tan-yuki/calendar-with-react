import React from 'react';
import moment from 'moment-range';
import Week from './week.js';
import _ from 'underscore';

export default React.createClass({
  getInitialState() {
    return {
      events: [
        {id: 1, date: moment(new Date('2015/03/15 10:00:00')), name: '買い物'},
        {id: 2, date: moment(new Date('2015/03/17 16:00:00')), name: '歯医者'},
        {id: 3, date: moment(new Date('2015/03/17 20:00:00')), name: '飲み会'},
      ],
    };
  },

  findEvents(startDay, endDay) {
    return _.filter(this.state.events, (e) => {
      return startDay <= e.date && e.date < endDay;
    });
  },

  render() {
    let startDay = moment().startOf('month');
    let endDay = moment().endOf('month');
    let weeks = [];

    // Create each Week view in calendar
    moment().range(startDay, endDay).by('weeks', (m) => {
      let startDay = moment(m).startOf('week');
      let endDay = moment(m).endOf('week');
      let weekEvents = this.findEvents(startDay, endDay);
      let id = startDay.format('YYYYMMDD');

      weeks.push(<Week key={id} startDay={startDay} events={weekEvents} />);
    });

    return <table className="calendar">
      <thead className="calendar-headline">
        <tr>
　　  　  <th className="calendar-cell">Mon</th>
　　  　  <th className="calendar-cell">Thu</th>
　　  　  <th className="calendar-cell">Wed</th>
　　  　  <th className="calendar-cell">Thu</th>
　　  　  <th className="calendar-cell">Fri</th>
　　  　  <th className="calendar-cell">Sat</th>
　　  　  <th className="calendar-cell">Sun</th>
　　    </tr>
      </thead>
      <tbody>{weeks}</tbody>
    </table>;
  }
})
