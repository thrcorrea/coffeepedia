import React, {useState, useRef} from 'react';
import './Grinder.css'

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function Grinder({ click, saveClick}) {
  const [isTouching, setIsTouching] = useState(false);
  const swipeDirection = useRef('null'); // 'left', 'right', or null
  const touchStartX = useRef(0);
  const swipeInterval = useRef(null);

  const SWIPE_THRESHOLD = 10;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsTouching(true);

    // @ts-ignore
    swipeInterval.current = setInterval(() => {
      console.log('Executando interval', { swipeDirection})
      if (swipeDirection.current === 'left') {
        swipeLeftFunction();
      } else if (swipeDirection.current === 'right') {
        swipeRightFunction();
      }
    }, 200);
    console.log({ swipeInterval})
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;

    
    const touchCurrentX = e.touches[0].clientX;
    const difference = touchCurrentX - touchStartX.current;
    
    if (Math.abs(difference) < SWIPE_THRESHOLD) {
      swipeDirection.current = 'null';
      console.log('DEFININDO NULO')
      return;
    }

  
    if (difference < 0) {
      console.log('SETING LEFT')
      swipeDirection.current = 'left';
    } else {
      swipeDirection.current = 'right';
    }
  };


  const swipeLeftFunction = () => {
    console.log('Deslizou para a esquerda');
    increment()
    // Aqui você adiciona a lógica que quer executar ao deslizar para a esquerda
  };

  const swipeRightFunction = () => {
    console.log('Deslizou para a direita');
    decrement()
    // Aqui você adiciona a lógica que quer executar ao deslizar para a direita
  };


  const handleTouchEnd = () => {
    setIsTouching(false);
    swipeDirection.current = 'null';
    console.log('END TOUCH')
    // @ts-ignore
    clearInterval(swipeInterval.current);
  };

  
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
    <div className='grinder-card'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={decrement}>-</button>
      <h3>Click {click}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Grinder
