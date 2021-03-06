import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import uiReducer from './ui_reducer';
import usersReducer from './users_reducer';

const RootReducer = combineReducers({
  users: usersReducer,
  errors,
  session,
  ui: uiReducer
});

export default RootReducer;