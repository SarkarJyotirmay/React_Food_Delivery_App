import { configureStore } from "@reduxjs/toolkit";
import { foodReducers } from "./slices/foodListSlice";
import { cartReducers } from "./slices/cartSlice";
import { authReducers } from "./slices/authSlice";

const store = configureStore({
    reducer: {
        foodReducers,
        cartReducers,
        authReducers,
    }
})

export default store