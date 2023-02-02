import { combineReducers } from '@reduxjs/toolkit';
import { reducer as notifierReducer } from '../slices/notifier';
import { reducer as modalsReducer } from '../slices/modals';
import { reducer as userReducer } from '../slices/user';
import { reducer as enfantReducer } from '../slices/enfant';
import { reducer as UIReducer } from '../slices/UI';

const combinedReducer = combineReducers({
  notifier: notifierReducer,
  modals: modalsReducer,
  user: userReducer,
  enfant: enfantReducer,
  ui: UIReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
