import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./exampleStore/ExampleReducer";

export const rootReducer = combineReducers({
  example: exampleReducer,
});
