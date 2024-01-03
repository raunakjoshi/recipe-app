import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import "./index.css";

const App = () => {
  return (
    <div>
      <nav>
        <ul className="test">
          <li className="test1">
            <Link to="/recipe-list">Recipe List</Link>
          </li>
          <li className="test2">
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div>
        <Routes>
          <Route path="/recipe-list" element={<RecipeList />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
