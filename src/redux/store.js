import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/features/auth/authSlice"
import productReducer from "../redux/features/products/ProductSlice";
import filterReducer from "./features/products/filterSlice";

export const store=configureStore({
    reducer:{
      auth:authReducer,
      product:productReducer,
      filter:filterReducer,
    },
})