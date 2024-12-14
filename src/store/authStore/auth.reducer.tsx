import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "./interface";

const initialState: IAuth = {
  message: "",
  loginLoading: false,
};

const AuthReducer = createSlice({
  name: "example",
  initialState,
  reducers: {
    loginRequest() {},
    loginSuccess() {},
    loginFail() {},
  },
});

export const AuthActions = AuthReducer.actions;

export default AuthReducer.reducer;
