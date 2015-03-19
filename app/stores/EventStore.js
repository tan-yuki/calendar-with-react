import AppDispatcher from '../dispatcher/AppDispatcher';
import EventConstants from '../constants/EventConstants';
import events from 'events';
import assign from 'object-assign';
import moment from 'moment';

let EventEmitter = events.EventEmitter;

let CHANGE_EVENT = 'change';

let _events = {}; // collection of events items

let momentInstance = moment();

/**
 * Create a Event item.
 *
 * @param {String} name The event name
 * @param {Moment} startDate Start datetime
 * @param {Object} [options] Optional data
 * @param {String} [options.description=null] Event description
 * @param {Moment} [options.endDate=null] End datetime
 */
function create(name, startDate, options={}) {
  // Using the current timestamp in place of a real id.
  let id = Date.now();

  _events[id] = assign({
    id: id,
    name: name,
    startDate: startDate,
    endDate: null,
    description: null,
  }, options);
}

/**
 * Delete a Event item.
 * @param {string} id
 */
function destroy(id) {
  delete _events[id];
}

let EventStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   *
   * @return {Object}
   */
  getAll() {
    return _events;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    let action = payload.action;

    switch(action.actionType) {
      case EventConstants.EVENT_CREATE:
        let name = action.name.trim();
        let startDate = action.startDate;
        if (name !== '' && startDate) {
          create(name, startDate);
          EventStore.emitChange();
        }
        break;

      case EventConstants.EVENT_DESTROY:
        destroy(action.id);
        EventStore.emitChange();
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })
});

export default EventStore;
