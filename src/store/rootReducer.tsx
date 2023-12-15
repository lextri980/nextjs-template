import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./ExampleStore/ExampleReducer";

export const rootReducer = combineReducers({
  example: exampleReducer,
});
