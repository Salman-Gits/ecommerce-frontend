import './index.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import RegisterForm from './components/LoginRegister/RegisterForm';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Conn from './components/LoginRegister/Conn';
import ShoesPage from "./ShoesPage";

import React, { useState } from 'react';
import CartPage from "./CartPage";
import "./App.css";
import ElectronicsPage from './ElectronicsPage';
import KitchenPage from './KitchenPage';
import FruitsPage from './FruitsPage';
import DressPage from './DressPage';
import PaymentPage from './PaymentPage';
import OrderSuccess from './OrderSuccess';
import HomeAppliances from './HomeAppliances';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    if (newQuantity <= 0) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index].quantity = newQuantity;
    }
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const placeOrder = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      <Navbar totalItems={totalItems} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Conn />} />

        <Route path="/electronics" element={<ElectronicsPage addToCart={addToCart} />} />
        <Route path="/shoes" element={<ShoesPage addToCart={addToCart} />} />
        <Route path="/kitchen" element={<KitchenPage addToCart={addToCart} />} />
        <Route path="/fruits" element={<FruitsPage addToCart={addToCart} />} />
        <Route path="/clothing" element={<DressPage addToCart={addToCart} />} />
        <Route path="/HomeAppliances" element={<HomeAppliances addToCart={addToCart} />} />

        <Route path="/cart" element={
          <CartPage
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            placeOrder={placeOrder}
          />
        } />

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

/* ================= NAVBAR ================= */

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/payment" ||
    location.pathname === "/order-success"
  ) {
    return null;
  }

  return (
    <header className="main-header">

      {/* LOGO */}
      <Link to="/home" className="logo">SeeUsoon</Link>

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* NAV LINKS */}
      <nav className={`main-nav ${menuOpen ? "active" : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/clothing" onClick={() => setMenuOpen(false)}>Clothing</Link>
        <Link to="/electronics" onClick={() => setMenuOpen(false)}>Electronics</Link>
        <Link to="/shoes" onClick={() => setMenuOpen(false)}>Shoes</Link>
        <Link to="/kitchen" onClick={() => setMenuOpen(false)}>Kitchen</Link>
        <Link to="/fruits" onClick={() => setMenuOpen(false)}>Fruits</Link>
        <Link to="/HomeAppliances" onClick={() => setMenuOpen(false)}>Appliances</Link>
      </nav>

      {/* CART OUTSIDE */}
      <Link to="/cart" className="cart-icon">
        🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>

    </header>
  );
};

export default App;