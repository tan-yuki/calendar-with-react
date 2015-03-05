import React    from 'react';
import Calendar from './calendar.js';

const App = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return <div className="app">
      <Calendar />
    </div>;
  }
});

React.render(<App/>, document.getElementById('main'));
