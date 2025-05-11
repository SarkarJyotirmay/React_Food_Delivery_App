import { createSlice, current } from "@reduxjs/toolkit";
// import { react } from "react";



export const cartSl = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    displayCart: () => {
      console.log("CartSlice Reducer Display");
    },
     addFirst: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action) => {
      const item = state.find((i) => i._id === action.payload._id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.findIndex((i) => i._id === action.payload._id);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1); // remove item when quantity reaches 0
        }
      }
    },
    removeItem: (state, action)=>{
      return state.filter((obj)=> obj._id != action.payload)
    },
    clearcart: (state)=>{
      return []
    }
  }
});

export const { displayCart, addFirst, increaseQuantity, decreaseQuantity,removeItem, clearcart} = cartSl.actions;
export const cartReducers = cartSl.reducer;
