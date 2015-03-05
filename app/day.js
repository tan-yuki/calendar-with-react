import React from 'react';
import moment from 'moment';

export default React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    let moment = this.props.date;
    let dateString = moment.format('YYYY/MM/DD');

    return <td className="day calendar-cell">{dateString}</td>;
  }
})
