import { createSlice } from "@reduxjs/toolkit";
import { ExampleInterface } from "./interface";

const initialState: ExampleInterface = {
  state: true,
};

const ExampleReducer = createSlice({
  name: "ExampleReducer",
  initialState,
  reducers: {
    example: (state, action) => {},
  },
});

export const ExampleActions = ExampleReducer.actions;

export default ExampleReducer.reducer;
