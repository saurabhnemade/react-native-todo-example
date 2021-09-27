import { combineReducers } from 'redux';
import notesReducer from './notes';

const RootReducer = combineReducers({
  notes: notesReducer,
});

export default RootReducer;
