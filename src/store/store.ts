import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        sth1: productSlice,
        sth2: userSlice,
    }
})

export default store 