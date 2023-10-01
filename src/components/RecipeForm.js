// src/components/RecipeForm.js
import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [recipe, setRecipe] = useState({ name: '', ingredients: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ ...recipe, id: Date.now() });
    setRecipe({ name: '', ingredients: '' });
  };

  return (
    <div>
      <h2>Adicionar Nova Receita</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome da Receita"
          value={recipe.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredientes"
          value={recipe.ingredients}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default RecipeForm;
