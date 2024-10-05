import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./exampleStore/example.reducer";

export const rootReducer = combineReducers({
  example: exampleReducer,
});
