import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../../assets/assets";

const foodSl = createSlice({
  name: "foodSlice",
  initialState: {
    loading: false,
    category: "All",
    foods: [...food_list],
  },
  reducers: {
    display: () => {
      console.log(initialState.foods);
    },
    setCategory: (state, action) => {
      state.category =
        state.category === action.payload ? "All" : action.payload;
    },
  },
});

export const { display, setCategory } = foodSl.actions;
export const foodReducers = foodSl.reducer;
