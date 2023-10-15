import React from 'react';
import './Grinder.css'

function Grinder({ click, saveClick}) {

  const increment = () => {
    click++
    saveClick(click)
  }

  const decrement = () => {
    if (click > 0) {
      click--
      saveClick(click);
    }
  }

  return(
    <div className='grinder-card'>
      <button onClick={decrement}>-</button>
      <h3>Click {click}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Grinder
