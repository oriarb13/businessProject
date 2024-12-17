import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const [text, setText] = useState("")

  const handleInput=(e)=>{
    console.log(e.target.value);
    setText(e.target.value)
  }

  useEffect(()=>{
    console.log(text);
    
  })

  const addPokemon=(e)=>{
    e.preventdefault()
    console.log(
      pokemon:{
        name:name
      });
  }
    

  return (
    <>
    <form onSubmit={addPokemon}>
        <h1>inputs</h1>
      <div>
        <label htmlFor="input">type something</label>
        <input type="text" name='input' id='input' onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="abilities">ability</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="type">type</label>
        <select name="cars" id="cars">
          <option value="ele">electric</option>
          <option value="water">water</option>
          <option value="fire">fire</option>
          <option value="plant">plant</option>
        </select>
      </div>


    </form>
    </>
  )
}

export default App
