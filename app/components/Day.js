import React  from 'react';
import moment from 'moment';
import EventActions from '../actions/EventActions.js'

export default React.createClass({
  getInitialState() {
    return {
      events: this.props.events
    };
  },

  createEventView() {
    let events = this.props.events;
    events.length && console.log(events);

    if (!events) {
      return '';
    }

    let eventsListView = [];
    events.forEach((e) => {
      eventsListView.push(<li className="event-item">{e.name}</li>);
    });

    return <ul className="event">{eventsListView}</ul>
  },

  onClick(e) {
    let name = 'This is for test';
    let moment = this.props.date;

    EventActions.create(name, moment);
  },

  render() {
    let moment = this.props.date;
    let dateString = moment.format('YYYY/MM/DD');

    return <td onClick={this.onClick} className="day calendar-cell">{dateString}{this.createEventView()}</td>;
  }
})
