import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './example-store/example.reducer';

export const rootReducer = combineReducers({
  example: exampleReducer,
});
