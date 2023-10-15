import React, {useState} from 'react';

function Grinder({ click, saveClick}) {
  console.log({ click})

  const [value, setValue] = useState(click)

  const increment = () => {
    click++
    saveClick(click)
    // console.log({value})
    // setValue(prevValue => prevValue + 1);
    // console.log({value})
    // saveClick(value)
  }

  const decrement = () => {
    if (click > 0) { // Se você quiser que o valor não vá abaixo de 0
      click--
      saveClick(click);
      // saveClick(value)
    }
  }

  return(
    <div>
      <button onClick={decrement}>-</button>
      <h3>Click {click}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Grinder
