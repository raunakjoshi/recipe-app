// src/components/RecipeList.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  deleteRecipeAsync,
  updateRecipeAsync,
} from "../actions/recipeActions";

import "../index.css"; // Update with the actual path

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRecipeAsync(id));
  };

  const [editRecipe, setEditRecipe] = useState(null);

  const handleEdit = (recipe) => {
    setEditRecipe(recipe);
  };

  const handleUpdate = () => {
    dispatch(updateRecipeAsync(editRecipe));
    setEditRecipe(null);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-4 p-4 bg-white shadow-md">
            <strong className="text-lg">{recipe.name}</strong>
            <p>Category: {recipe.category}</p>
            <p>Preparation Time: {recipe.preparationTime}</p>
            <p>Ingredients: {recipe.ingredients}</p>

            <button
              className="bg-blue-500 text-white px-4 py-2 mr-2"
              onClick={() => handleEdit(recipe)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => handleDelete(recipe.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editRecipe && (
        <div className="mt-8 p-4 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={editRecipe.name}
              onChange={(e) =>
                setEditRecipe({ ...editRecipe, name: e.target.value })
              }
              className="border border-gray-300 p-2 w-full"
            />
          </label>
          {/* Add other fields as needed */}
          <button
            className="bg-green-500 text-white px-4 py-2"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
