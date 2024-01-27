import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlices";
import wishlistReducer from "../slices/wishlistSlices";

export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlists: wishlistReducer,
  },
});
