import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";
import usersReducer from "./reducers/usersSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
  },
});

export default store;
