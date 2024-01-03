// src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import store from "./store";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recipe-list" element={<RecipeList />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
