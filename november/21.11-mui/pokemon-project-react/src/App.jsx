import { useState } from 'react';
import './index.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound/NotFound.jsx';

// Pages import
import Home from './pages/HomePage/HomePage.jsx';
import About from './pages/AboutPage/AboutPage.jsx';
import Favorites from './pages/FavoritesPage/FavoritesPage.jsx';
import Search from './pages/Search/Search.jsx';
import CardPage from './pages/CardPage/CardPage.jsx';
import AddPoke from './pages/AddPoke/AddPoke.jsx';

// Components
import DrawerAppBar from './components/Navbar.jsx';


function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokeName" element={<CardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />}/>
        <Route path="/add" element={<AddPoke />}/>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
