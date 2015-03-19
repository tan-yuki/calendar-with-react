import React      from 'react';
import Calendar   from './calendar.js';
import EventStore from '../stores/EventStore.js';

function getAll() {
  return {
    events: EventStore.getAll()
  }
}

export default React.createClass({
  getInitialState() {
    return getAll();
  },

  componentDidMount() {
    EventStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    EventStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getAll());
  },

  render() {
    return <div className="app">
      <Calendar events={this.state.events} />
    </div>;
  }
});
