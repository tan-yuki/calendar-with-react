import React from 'react';
import moment from 'moment-range';
import Week from './week.js';

export default React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    let startDay = moment().startOf('month');
    let endDay = moment().endOf('month');
    let weeks = [];

    moment().range(startDay, endDay).by('weeks', (m) => {
      let startDay = moment(m.startOf('week'));
      let id = startDay.format('YYYYMMDD');

      weeks.push(<Week key={id} startDay={startDay} />);
    });

    return <table id="calendar"><tbody>{weeks}</tbody></table>;
  }
})
