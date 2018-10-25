import { combineReducers } from 'redux';
import EventsListReducer from './EventsListReducer';
import EventsReducer from './EventsReducer';

export default combineReducers({
  events: EventsListReducer,
  createEvent: EventsReducer,
});
