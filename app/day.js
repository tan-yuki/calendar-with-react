import React from 'react';
import moment from 'moment';

export default React.createClass({
  getInitialState() {
    return {
      events: this.props.events
    };
  },

  createEventView() {
    let events = this.state.events;
    if (!events) {
      return '';
    }

    let eventsListView = [];
    events.forEach((e) => {
      eventsListView.push(<li className="event-item">{e.name}</li>);
    });

    return <ul className="event">{eventsListView}</ul>
  },

  render() {
    let moment = this.props.date;
    let dateString = moment.format('YYYY/MM/DD');
    let eventsView = this.createEventView();

    return <td className="day calendar-cell">{dateString}{this.createEventView()}</td>;
  }
})
