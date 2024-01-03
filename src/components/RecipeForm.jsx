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
    <div className="container mx-auto my-8 p-4 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Recipe Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="preparationTime"
          >
            Preparation Time:
          </label>
          <input
            type="text"
            name="preparationTime"
            value={formData.preparationTime}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (comma-separated):
          </label>
          <div className="flex">
            <input
              type="text"
              name="ingredients"
              value={formData.ingredients.join(", ")}
              onChange={handleChange}
              disabled
              className="border border-gray-300 p-2 w-full"
            />
            <button
              onClick={handleAddIngredient}
              className="ml-2 bg-blue-500 text-white p-2"
            >
              Add Ingredient
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="instructions"
          >
            Instructions:
          </label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full h-32"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
