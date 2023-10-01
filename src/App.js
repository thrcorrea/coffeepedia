// src/components/App.js
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

function App() {
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : []
  });

  const addRecipe = (newRecipe) => {
    const listRecipe = [...recipes, newRecipe]
    console.log({listRecipe})
    setRecipes(listRecipe);
    localStorage.setItem('recipes', JSON.stringify(listRecipe))
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  };

  return (
    <div>
      <h1>Minhas Receitas de Café</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;
