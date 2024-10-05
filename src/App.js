import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // تأكد من استيراد Bootstrap CSS
import Header from './Components/Header';
import Home from './Components/Home';
import CartItem from './Components/CartItem';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CartItem" element={<CartItem/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
