import { combineReducers } from '@reduxjs/toolkit';
import appointmentsListReducer from './reducers/appointmentsListReducer';
import coachesListReducer from './reducers/coachesListReducer';

const rootReducer = combineReducers({
  appointmentsList: appointmentsListReducer,
  coachesList: coachesListReducer,
});

export default rootReducer;