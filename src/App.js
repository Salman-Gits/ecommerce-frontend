import './index.css';
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import RegisterForm from './components/LoginRegister/RegisterForm';
import{BrowserRouter,Routes,Route,Link, useLocation} from "react-router-dom"
import OpenPage from './components/LoginRegister/OpenPage';
import Conn from './components/LoginRegister/Conn';
import ShoesPage from "./ShoesPage"; // Import Shoes Page


import React, { useState } from 'react';
import CartPage from "./CartPage";
import "./App.css"; // Add CSS for navbar styling
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
    setCart([]); // Clears the cart
  };
  

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

 
   return (

    <div>
      
     <BrowserRouter>
        <Navbar totalItems={totalItems} />
      <Routes>
        <Route path="/" element={<OpenPage/>}/>    
        <Route path="/electronics" element={<ElectronicsPage addToCart={addToCart} />} />
        <Route path="/login" element={<LoginRegister/>}/>
        <Route path="/home" element={<Conn/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
        <Route path="/shoes" element={<ShoesPage addToCart={addToCart} />} />
        <Route path="/kitchen" element={<KitchenPage addToCart={addToCart} />} />
        <Route path="/fruits" element={<FruitsPage addToCart={addToCart} />} />
        <Route path="/clothing" element={<DressPage addToCart={addToCart} />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/HomeAppliances" element={<HomeAppliances addToCart={addToCart} />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}
const Navbar = ({totalItems }) => {
  const location = useLocation();
  
  if (location.pathname === "/" || location.pathname === "/order-success" || location.pathname === "/payment"
    || location.pathname === "/login" || location.pathname === "/register"
  ) {
    return null; // Hide navbar on home page
  }

  return (
    <nav className="navbar">
      <Link to="/clothing" className="nav-link">Clothing</Link>
      <Link to="/electronics" className="nav-link">Electronics</Link>
      <Link to="/shoes" className="nav-link">Shoes</Link>
      <Link to="/kitchen" className="nav-link">Kitchen</Link>
      <Link to="/fruits" className="nav-link">Fruits</Link>
      <Link to="/HomeAppliances" className="nav-link">HomeAppliances</Link>
      <Link to="/cart" className="cart-icon">
        🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </nav>
  );
};

export default App;
