import { createSlice } from '@reduxjs/toolkit';
import { TAuthState } from './type';

const initialState: TAuthState = {
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
