import { useState } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import { store1 } from './store/index.js'
import TodoList from './components/TodoList.jsx'
function App() {
  return (
    <>
    <Provider store={store1}>
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>redux to-do list</h1>
        <TodoList/>
      </div>
    </Provider>

    </>
  )
}

export default App
