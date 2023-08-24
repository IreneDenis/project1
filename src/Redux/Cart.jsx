/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        window.alert("Item already in cart!");
      } else {
        state.cart.push(action.payload);
        console.log("added to cart");
      }
    },
    RemoveFromCart: (state, action) => {
      const nextCartItem = state.cart.filter(
        (cart) => cart.id !== action.payload.id
      );
      state.cart = nextCartItem;
    },
    Clearcart(state,action) {
      state.cart = [];
    },
  },
});
export const { addToCart, RemoveFromCart, Clearcart } = counterSlice.actions;

export default counterSlice.reducer;