import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        val: 10
    },
    reducers: {
        add: (state)=> {
            ++state.val
        }
    }
})

export const {add} = counterSlice.actions
export default counterSlice.reducer