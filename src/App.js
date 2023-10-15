// src/components/App.js
import React, { useState } from 'react';
import Grinder from './components/Grinder'
import Recipes from './components/Recipes';

function App() {
  const [recipeList, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : []
  });

  const [click, setClick] = useState(() => {
    const storedClick = localStorage.getItem('click');
    return storedClick ? parseInt(storedClick, 10) : 0
  })

  const saveClick = (newClick) => {
    setClick(newClick)
    localStorage.setItem('click', newClick.toString())
  }

  const addRecipe = (newRecipe) => {
    const listRecipe = [...recipeList, newRecipe]
    console.log({listRecipe})
    setRecipes(listRecipe);
    localStorage.setItem('recipes', JSON.stringify(listRecipe))
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipeList.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  };

  return (
    <div>
      <Grinder click={click} saveClick={saveClick} />
      <Recipes recipeList={recipeList} deleteRecipe={deleteRecipe} addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
