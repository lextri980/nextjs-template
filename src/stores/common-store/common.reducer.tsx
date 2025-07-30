import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TInitialState } from './type';

const initialState: TInitialState = {
  loading: false,
};

const CommonReducer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const CommonActions = CommonReducer.actions;

export default CommonReducer.reducer;
