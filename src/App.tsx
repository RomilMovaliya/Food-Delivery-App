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
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { ROUTES } from '../src/constant/constant'
import SearchPage from './components/HomePage/SearchPage';

function App() {
  const [navbarColor, setNavbarColor] = useState('transparent'); // Default color



  return (
    <>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.RESTAURANT} element={<Restaurants />} />
          <Route path={ROUTES.CATEGORIES} element={<Categories />} />
          <Route path={ROUTES.DETAILVIEW} element={<DetailView />} />
          <Route path={ROUTES.FOODITEM} element={<FoodItem />} />
          <Route path={ROUTES.CART} element={<CartItem />} />
          <Route path={ROUTES.AUTH} element={<AuthPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </>
  )
}

export default App
