import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, actions) => {
      ++state.value;
      console.log(actions);
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
