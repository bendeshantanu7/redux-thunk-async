import todoSlice from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export default store