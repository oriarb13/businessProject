import { useState } from 'react'
import './App.css'

import CardPage from './components/CardPageComp/CardPageComp.jsx'
import HomePage from './components/HomePageComp/HomePageComp.jsx'


function App() {
  const [chosenPoke, setChosenPoke] = useState(0)
  const [isUserClick, setIsUserClick] = useState(false)
  return (
    <>
        <div>
        {isUserClick ?
        <CardPage chosenPoke={chosenPoke}/>
        : <HomePage setChosenPoke={setChosenPoke} setIsUserClick = {setIsUserClick}/> 
        }        
        </div> 
    </>
  )
}

export default App
