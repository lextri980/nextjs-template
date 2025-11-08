import { createSlice } from '@reduxjs/toolkit';
import { TInitialState } from './type';

const initialState: TInitialState = {
  message: '',
  loading: false,
};

const AuthReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest() {},
    loginSuccess() {},
    loginFail() {},
  },
});

export const AuthActions = AuthReducer.actions;

export default AuthReducer.reducer;
