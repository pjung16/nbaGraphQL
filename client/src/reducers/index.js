import {combineReducers} from 'redux';
import players from './playerReducer';
import graphs from './graphReducer';

const rootReducer = combineReducers({
  // short hand property names
  graphs,
  players,
})

export default rootReducer;