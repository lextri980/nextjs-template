import { combineReducers } from '@reduxjs/toolkit';
import commonReducer from './common-store/common.reducer';
import exampleReducer from './example-store/example.reducer';

export const rootReducer = combineReducers({
  common: commonReducer,
  example: exampleReducer,
});
