import { createSlice } from '@reduxjs/toolkit';
import { TExampleState } from './type';

const initialState: TExampleState = {
  state: true,
  postList: [],
  message: '',
};

const ExampleReducer = createSlice({
  name: 'example',
  initialState,
  reducers: {
    getPostRequest() {},
    getPostSucess(state, action) {
      state.postList = action.payload;
    },
    getPostFail(state, action) {
      state.postList = [];
      state.message = action.payload;
    },
  },
});

export const ExampleActions = ExampleReducer.actions;

export default ExampleReducer.reducer;
