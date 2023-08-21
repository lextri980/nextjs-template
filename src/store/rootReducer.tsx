import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./reducers/exampleReducer";

export const rootReducer = combineReducers({
  example: exampleReducer,
});
