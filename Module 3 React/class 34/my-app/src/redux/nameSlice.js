import { createSlice } from "@reduxjs/toolkit";


const nameSlice = createSlice({
    name: "names",
    initialState: {
        name: 'abc'
    },
    reducers: {
        setMyName: (state,action)=> {
            
            console.log(action)
            state.name = action.payload

        }
    }

})


export const {setMyName} = nameSlice.actions

export default nameSlice.reducer