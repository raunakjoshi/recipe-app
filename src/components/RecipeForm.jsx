// src/components/RecipeForm.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeAsync, fetchIngredients } from "../actions/recipeActions";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    preparationTime: "",
    ingredients: [],
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const newIngredient = prompt("Enter a new ingredient:");
    if (newIngredient) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, newIngredient],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipeAsync(formData)).then(() => {
      // Handle redirection or additional actions after adding a recipe
    });
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Preparation Time:
          <input
            type="text"
            name="preparationTime"
            value={formData.preparationTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Ingredients (comma-separated):
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients.join(", ")}
            onChange={handleChange}
            disabled
          />
          <button onClick={handleAddIngredient}>Add Ingredient</button>
        </label>
        <label>
          Instructions:
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
