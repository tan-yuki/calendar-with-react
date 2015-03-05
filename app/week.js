import React from 'react';
import moment from 'moment-range';
import Day from './day.js';

export default React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    let startDay = moment(this.props.startDay);
    let endDay = moment(this.props.startDay.endOf('week'));
    let dates = [];

    moment().range(startDay, endDay).by('days', (m) => {
      let id = m.format('YYYYMMDD');

      dates.push(<Day key={id} date={m} />);
    });

    return <tr className="week">{dates}</tr>;
  }
})
