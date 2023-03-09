import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
    addProduct(state, action) {
      state.push(action.payload);
      return state;
    },
  },
});

export const { setProducts, addProduct } = productsSlice.actions;

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:2000/products");
      dispatch(setProducts(res.data));
    } catch (err) {
      alert("Something went wrong");
      console.error(err.message);
    }
  };
};

export const postProduct = (product) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:2000/products", product);
      dispatch(addProduct(res.data));
      alert("Product added successfully");
    } catch (err) {
      console.error(err.message);
      alert("Something went wrong");
    }
  };
};

export default productsSlice.reducer;
