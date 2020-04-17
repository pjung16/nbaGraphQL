import {combineReducers} from 'redux';
import players from './playerReducer';

const rootReducer = combineReducers({
  // short hand property names
  players,
})

export default rootReducer;