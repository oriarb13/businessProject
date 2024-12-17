import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//mui imp
import {Avatar, TextField} from '@mui/material'

import { Box, ThemeProvider, createTheme } from '@mui/system';

const getInitial=(fullName)=>{
  const namesArray= fullName.split(" ")
  return namesArray[0][0]+namesArray[1][0]
}


const DUMMY_USERS = [{ID:1,fullName:"stu1",url:""},{ID:2,fullName:"stu2",},{ID:3,fullName:"stu3",}]

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
    <div>
      {DUMMY_USERS.map((user)=>{
        getInitial(user.fullName)
        return 
        <div key={user.id}>
          <Avatar src={user.url}/>
          <p>{user.fullName}</p>
        </div>
      })}

    </div>
    </>
  )
}

export default App
