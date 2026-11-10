// Imports
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Search from './pages/Search';

import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import ErrorMessage from './components/ErrorMessage';


export default function App() {

  const [recipes, setRecipes] = useState([]);

  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/'
        element={
          <Home recipes={recipes}
            setRecipes={setRecipes} />}
          />
        
        <Route path='/category'
         element={
          <Category recipes={recipes}
            setRecipe={setRecipes} />}
          />

          <Route path='/recipe'
           element={
            <Recipe recipes={recipes}
              setRecipe={setRecipes} />}
            />

          <Route path='/favorites'
           element={
            <Favorites recipes={recipes}
              setRecipes={setRecipes} />}
            />

          <Route path='/search'
           element={
            <Search recipes={recipes}
              setRecipes={setRecipes} />}
            />

      </Routes>
    </div>
  )
}