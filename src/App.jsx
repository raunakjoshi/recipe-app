// src/components/App.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/recipe-list" className="hover:text-gray-300">
                Recipe List
              </Link>
            </li>
            <li>
              <Link to="/add-recipe" className="hover:text-gray-300">
                Add Recipe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center">
        <img
          src="https://www.allrecipes.com/thmb/RTo6ddljby-5lAszPdMRwQ-aVh0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19863best-burger-everFranceC4x3-c9c7d5cae40b4a58a110a33e04b531d1.jpg" // Replace with your image URL
          alt="Full Size"
          className="w-full h-full object-cover"
        />
      </div>
      <hr className="my-2" />

      {/* Main Content */}
      <div className="container mx-auto my-8 p-4">
        <Routes>
          <Route path="/recipe-list" element={<RecipeList />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
