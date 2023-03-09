import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts(state) {
      return state;
    },
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { getProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
