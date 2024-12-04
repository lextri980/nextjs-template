import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authStore/auth.reducer";
import exampleReducer from "./exampleStore/example.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  example: exampleReducer,
});
