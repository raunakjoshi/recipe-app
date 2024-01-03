// src/actions/recipeActions.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = " http://localhost:3001"; // Replace with your actual backend endpoint

// Fetch recipes
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await axios.get(`${apiEndpoint}/recipes`);
    return response.data;
  }
);

// Add recipe
export const addRecipeAsync = createAsyncThunk(
  "recipes/addRecipe",
  async (recipe) => {
    const response = await axios.post(`${apiEndpoint}/recipes`, recipe);
    return response.data;
  }
);

// Update recipe
export const updateRecipeAsync = createAsyncThunk(
  "recipes/updateRecipe",
  async (recipe) => {
    const response = await axios.put(
      `${apiEndpoint}/recipes/${recipe.id}`,
      recipe
    );
    return response.data;
  }
);

// Delete recipe
export const deleteRecipeAsync = createAsyncThunk(
  "recipes/deleteRecipe",
  async (id) => {
    await axios.delete(`${apiEndpoint}/recipes/${id}`);
    return id;
  }
);

// Fetch ingredients
export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const response = await axios.get(`${apiEndpoint}/ingredients`);
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateRecipeAsync.fulfilled, (state, action) => {
        const index = state.findIndex(
          (recipe) => recipe.id === action.payload.id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
        return state.filter((recipe) => recipe.id !== action.payload);
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        // Assuming ingredients are stored in the same state
        return action.payload;
      });
  },
});

export default recipeSlice.reducer;
