import React from 'react'
import { useState } from 'react';

const Content = () => {

    

    useState();
    useState();
    useState();


    function handleNameChange() {
        const names = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random()*3);

        return names[int];
    }

    const [count, setCount] = useState(0);

    function incrementFunction() {
        setCount(count+1)
    }

    function decrementFunction() {
        setCount(count-1)
    }

  return (
    <main>
        <p>Let's Earn Monry</p>
        <button> Subscribe </button>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
    </main>
  )
}

export default Content