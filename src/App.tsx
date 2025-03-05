// jay dinesh bhagat na navkhand neja vada meldi maa.

import { useState } from 'react';
import './App.css'
import Categories from './components/categoriesPage/Categories';
import Hero from './components/HomePage/Hero';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from "react-router";
import DetailView from './components/detailViewPage/detailView';
import CartItem from './components/CartPage/CartItem';
import LoginPage from './components/Authentication/LoginPage';

function App() {
  const [navbarColor, setNavbarColor] = useState('transparent'); // Default color



  return (
    <>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/detailView" element={<DetailView />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/profile" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
