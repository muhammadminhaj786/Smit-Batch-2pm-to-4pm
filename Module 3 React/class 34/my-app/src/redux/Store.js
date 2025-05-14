import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoSlice'
import nameSlice from './nameSlice'


const store = configureStore({
    reducer: {
        todo: todoSlice,
        names: nameSlice
    }
})

export default store