import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  //TODO: Set this initialState to empty array
  initialState: [
    {
      productName: "Black Shirt",
      img: "https://images.tokopedia.net/img/cache/300-square/product-1/2017/7/7/3453155/3453155_2fd813d6-d997-4c21-bd0f-df19d5e6fe5c_1000_1074.jpg",
      price: 43000,
      id: 1,
      qty: 1,
    },
    {
      productName: "Car Wash Soap",
      img: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/20/f724a9fe-c6fe-4418-a740-b9630dbd5222.jpg",
      price: 33810,
      id: 2,
      qty: 2,
    },
  ],
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
