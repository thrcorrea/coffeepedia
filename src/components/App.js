// src/components/App.js
import React, { useState } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
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
