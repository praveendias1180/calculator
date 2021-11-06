import { combineReducers } from 'redux';
import variablesReducer from './variables';

export default combineReducers({
  variables: variablesReducer,
});
