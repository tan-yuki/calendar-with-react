import React  from 'react';
import moment from 'moment-range';
import Week   from './Week.js';
import _      from 'underscore';

export default React.createClass({
  getInitialState() {
    return {
      events: this.props.events
    }
  },

  findEvents(startDay, endDay) {
    return _.filter(this.state.events, (e) => {
      return startDay <= e.startDate && e.startDate < endDay;
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
