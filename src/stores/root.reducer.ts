import { combineReducers } from '@reduxjs/toolkit';
import actionReducer from './action-store/action.reducer';
import exampleReducer from './example-store/example.reducer';

export const rootReducer = combineReducers({
  example: exampleReducer,
  action: actionReducer,
});
