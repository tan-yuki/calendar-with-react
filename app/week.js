import React from 'react';
import moment from 'moment-range';
import Day from './day.js';
import _ from 'underscore';

export default React.createClass({
  getInitialState() {
    return {
      events: this.props.events
    };
  },

  findDayEvent(date) {
    let dateString = date.format('YYYYMMDD');
    return _.filter(this.state.events, (e) => {
      return e.date.format('YYYYMMDD') === dateString;
    });
  },

  render() {
    let startDay = moment(this.props.startDay);
    let endDay = moment(this.props.startDay).endOf('week');
    let dates = [];

    moment().range(startDay, endDay).by('days', (m) => {
      let id = m.format('YYYYMMDD');
      let events = this.findDayEvent(m);

      dates.push(<Day key={id} date={m} events={events}/>);
    });

    return <tr className="week">{dates}</tr>;
  }
})
