import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.push(action.payload)
    },
   
  },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
