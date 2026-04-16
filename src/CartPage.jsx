// import React, { useState } from "react";
import "./CartPage.css";
import {  useNavigate } from "react-router-dom";

const CartPage = ({ cart, updateQuantity, removeFromCart, placeOrder }) => {
  // const [orderSuccess, setOrderSuccess] = useState(false);
  // const [orderPlaced, setOrderPlaced] = useState(false); // ✅ New state to track if order is placed
  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="cart-page" style={{ 
       background: "#f1f8e9 ",
       minHeight: "100vh",padding: "20px" , width:"100vw"}}>
      {cart.length > 0 && (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalAmount}</h3>
          <button onClick={() => navigate("/payment")} className="order-btn">
        Proceed to Payment
      </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
