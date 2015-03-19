import AppDispatcher from '../dispatcher/AppDispatcher';
import EventConstants from '../constants/EventConstants';

var TodoActions = {

  /**
   * @param  {string} name
   * @param  {Moment} startDate
   */
  create: function(name, startDate) {
    AppDispatcher.handleViewAction({
      actionType: EventConstants.EVENT_CREATE,
      name: name,
      startDate: startDate
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.handleViewAction({
      actionType: EventConstants.EVENT_DESTROY,
      id: id
    });
  },

};

module.exports = TodoActions;
