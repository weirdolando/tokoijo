import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const itemExists = state.find((s) => s.id === action.payload.id);
      if (itemExists) itemExists.qty++;
      else {
        const itemCopy = JSON.parse(JSON.stringify(action.payload));
        itemCopy.qty = 1;
        state.push(itemCopy);
      }
      return state;
    },
    minusItem(state, action) {
      const itemExists = state.find((s) => s.id === action.payload.id);
      if (itemExists.qty > 1) itemExists.qty--;
      return state;
    },
    deleteItem(state, action) {
      return state.filter((s) => s.id !== action.payload.id);
    },
  },
});

export const { addItem, minusItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
