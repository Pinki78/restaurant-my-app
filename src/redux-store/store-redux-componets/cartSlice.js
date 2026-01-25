import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartState", // ✅ you can name it whatever you like
  initialState,
  reducers: {
    addToCart: (state, action) => {
  const product = action.payload;

  const existingItem = state.cartItems.find(
    item => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cartItems.push({
      ...product,
      quantity: 1,
    });
  }

  state.totalQuantity = state.cartItems.reduce(
    (sum, i) => sum + i.quantity,
    0
  );

  state.totalPrice = state.cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
},

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(i => i.id !== id);
      state.totalQuantity = state.cartItems.reduce((sum, i) => sum + i.quantity, 0);
      state.totalPrice = state.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },

increaseQuantity: (state, action) => {
  const item = state.cartItems.find(
    (i) => i.id === action.payload
  );
  if (item) item.quantity += 1;
},

decreaseQuantity: (state, action) => {
  const item = state.cartItems.find(
    (i) => i.id === action.payload
  );
  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );
    }
  }
},



    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart , increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
