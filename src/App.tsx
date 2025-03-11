// jay dinesh bhagat na navkhand neja vada meldi maa.

import { useState } from 'react';
import './App.css'
import Categories from './components/categoriesPage/Categories';
import Hero from './components/HomePage/Hero';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from "react-router";
import DetailView from './components/detailViewPage/detailView';
import CartItem from './components/CartPage/CartItem';
import FoodItem from './components/categoriesPage/FoodItem';
import Restaurants from './components/HomePage/Restaurants';
import AuthPage from './components/Authentication/AuthPage';
import ProfilePage from './components/Authentication/ProfilePage';

function App() {
  const [navbarColor, setNavbarColor] = useState('transparent'); // Default color



  return (
    <>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<Restaurants />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/detailView/:id" element={<DetailView />} />
          <Route path="/categories/:id" element={<FoodItem />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
