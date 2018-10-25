import firebase from 'firebase';
import { EVENT_UPDATE, EVENT_CREATE, EVENTS_FETCH_SUCCESS } from './types';


export const eventUpdate = ({ prop, value }) => ({
  type: EVENT_UPDATE,
  payload: { prop, value },
});

export const eventCreate = ({ title, date }) => {
  return (dispatch) => {
    firebase.database().ref('events')
      .push({ title, date })
      .then(() => {
        dispatch({ type: EVENT_CREATE });
      });
  };
};

export const eventsFetch = () => {
  return (dispatch) => {
    firebase.database().ref('events')
      .on('value', (snapshot) => {
        dispatch({ type: EVENTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
