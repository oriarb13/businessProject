import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from './components/SignInForm.jsx'
import Home from './components/Home.jsx'
import QueryPrint from './components/QueryPrint.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/signIn' element={<SignIn/>}></Route>    
      <Route path='/QueryPrint' element={<QueryPrint/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}
export default App
