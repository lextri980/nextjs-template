import { createSlice } from '@reduxjs/toolkit';
import { TInitialState } from './type';

const initialState: TInitialState = {
  loading: false,
  postList: [],
  message: '',
};

const ExampleReducer = createSlice({
  name: 'example',
  initialState,
  reducers: {
    getPostRequest(state) {
      state.loading = true;
    },
    getPostSucess(state, action) {
      state.loading = false;
      state.postList = action.payload;
    },
    getPostFail(state, action) {
      state.loading = false;
      state.postList = [];
      state.message = action.payload;
    },
  },
});

export const ExampleActions = ExampleReducer.actions;

export default ExampleReducer.reducer;
