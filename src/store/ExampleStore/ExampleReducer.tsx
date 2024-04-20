import { createSlice } from "@reduxjs/toolkit";
import { IExample } from "./interface";

const initialState: IExample = {
  state: true,
};

const ExampleReducer = createSlice({
  name: "example",
  initialState,
  reducers: {
    exampleAction(state, action) {
      console.log(state, action);
    },
    getPostRequest(state) {},
    getPostSucess(state, action) {},
    getPostFail(state, action) {},
  },
});

export const ExampleActions = ExampleReducer.actions;

export default ExampleReducer.reducer;
