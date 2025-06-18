import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.jsx";
import cartSlice from "./cartSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
  },
});

export default store;
