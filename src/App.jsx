// src/App.js
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/recipe-list">Recipe List</Link>
          </li>
          <li>
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
