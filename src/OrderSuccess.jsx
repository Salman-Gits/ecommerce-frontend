import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
    <div className="success-icon">✅</div>
    <div className="success-message">Payment Successful</div>
    <div className="success-subtext">Your order has been placed successfully.</div>
    <Link to="/home" className="success-button">Go to Home</Link>
</div>
  );
};

export default OrderSuccess;
