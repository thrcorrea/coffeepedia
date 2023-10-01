// src/components/RecipeList.js
import React from 'react';

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div>
      <h2>Minhas Receitas</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name} - {recipe.ingredients}
            <button onClick={() => deleteRecipe(recipe.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
