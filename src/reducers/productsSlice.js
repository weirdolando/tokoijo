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
    removeProduct(state, action) {
      return state.filter((s) => s.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;

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
      alert("Product added");
    } catch (err) {
      console.error(err.message);
      alert("Something went wrong");
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:2000/products/${id}`);
      dispatch(removeProduct(id));
      alert("Product deleted");
    } catch (err) {
      console.error(err.message);
      alert("Something went wrong");
    }
  };
};

export default productsSlice.reducer;
