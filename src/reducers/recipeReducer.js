// src/reducers/recipeReducer.js
import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.unshift(action.payload);
    },
    updateRecipe: (state, action) => {
      const index = state.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteRecipe: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload);
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
