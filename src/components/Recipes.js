import React from 'react'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
import './Recipes.css'


function Recipes({ recipeList, addRecipe, deleteRecipe }) {

  return(
    <div className='recipes-card'>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipeList} deleteRecipe={deleteRecipe} />
    </div>
  ) 
  
}

export default Recipes
