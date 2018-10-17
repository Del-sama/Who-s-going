import { combineReducers } from 'redux';
import EventReducer from './EventsReducer';

export default combineReducers({
  events: EventReducer,
});
