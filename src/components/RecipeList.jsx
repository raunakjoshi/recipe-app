// src/components/RecipeList.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  deleteRecipeAsync,
  updateRecipeAsync,
} from "../actions/recipeActions";

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
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>
            <p>Category: {recipe.category}</p>
            <p>Preparation Time: {recipe.preparationTime}</p>
            <p>Ingredients: {recipe.ingredients}</p>

            <button onClick={() => handleEdit(recipe)}>Edit</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editRecipe && (
        <div>
          <h2>Edit Recipe</h2>
          <label>
            Name:
            <input
              type="text"
              value={editRecipe.name}
              onChange={(e) =>
                setEditRecipe({ ...editRecipe, name: e.target.value })
              }
            />
          </label>
          {/* Add other fields as needed */}
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
