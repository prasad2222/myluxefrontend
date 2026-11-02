  import { useState } from 'react'
  import './App.css'
  import { Routes, Route } from "react-router-dom";
  import { FavoritesPage } from "./components/FavoritesPage";
  import { AddToCart } from './components/AddToCart';
  import { HomePage } from './Pages/HomePage';
  import { ProductList } from './Pages/ProductList';
  import { RegisterPage } from './Pages/RegisterPage';
  import { LoginPage } from './Pages/LoginPage';
  import { Empform} from './components/form_practice/Empform';


  function App() {

    return (
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Products/:category" element={<ProductList />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Empform" element={<Empform/>}/>
      </Routes> 
    )
  }

  export default App
