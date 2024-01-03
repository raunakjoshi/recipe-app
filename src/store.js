// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./actions/recipeActions";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;
