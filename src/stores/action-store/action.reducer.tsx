import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TInitialState } from './type';

const initialState: TInitialState = {
  loading: false,
};

const ActionReducer = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const RunActions = ActionReducer.actions;

export default ActionReducer.reducer;
