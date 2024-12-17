
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages Import 
import Home from './pages/Home.jsx'
import SignInPage from './pages/SignInPage.jsx'
import QueryPrint from './pages/QueryPrint.jsx'
import DummyDataPage from './pages/DummyDataPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/query-print" element={<QueryPrint />} />
        <Route path="/dummy" element={<DummyDataPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

