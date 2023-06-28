import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('');

    function handleNameChange() {
        const names = ["Earn", "Grow", "Give"];
        const ind = Math.floor(Math.random()*3);

        setName(names[ind])

        return name
    }
    

  return (
    <main>
        <p>Let's {name} Money</p>
        <button onClick={() => handleNameChange()}> Subscribe </button>
    </main>
  )
}

export default Content