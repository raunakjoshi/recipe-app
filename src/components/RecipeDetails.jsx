// src/components/RecipeDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRecipes,
  updateRecipeAsync,
  deleteRecipeAsync,
} from "../actions/recipeActions";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [recipe, setRecipe] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe || {});
  }, [id, recipes]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateRecipeAsync(recipe)).then(() => {
      setEditMode(false);
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      dispatch(deleteRecipeAsync(parseInt(id))).then(() => {
        navigate("/recipe-list");
      });
    }
  };

  return (
    <div>
      <h2>Recipe Details</h2>
      {editMode ? (
        <div>{/* ... (rest of the edit form code) */}</div>
      ) : (
        <div>
          <p>
            <strong>Recipe Name:</strong> {recipe.name}
          </p>
          <p>
            <strong>Category:</strong> {recipe.category}
          </p>
          <p>
            <strong>Preparation Time:</strong> {recipe.preparationTime}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
          <button onClick={handleEdit}>Edit Recipe</button>
          <button onClick={handleDelete}>Delete Recipe</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
