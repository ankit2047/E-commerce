import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route,} from "react-router-dom"
import Product from './pages/Product/Product';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProductList from './pages/product-list/ProductList';
import Contact from './pages/contact/Contact';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
