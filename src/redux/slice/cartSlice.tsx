import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  productId: string;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action: PayloadAction<CartState>) {
        state.push(action.payload);
      },
      prepare(productId) {
        return { payload: productId };
      },
    },
    removeProduct: {
      reducer(state, action: PayloadAction<CartState>) {
        return (state = state.slice().filter((id) => id !== action.payload));
      },
      prepare(productId) {
        return { payload: productId };
      },
    },
  },
});

export const selectAllProducts = (state: RootState) => state.cart;
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
