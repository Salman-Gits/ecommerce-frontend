import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";
import Headers from "./components/LoginRegister/Headers";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate Payment Processing
    setTimeout(() => {
      navigate("/order-success");
    }, 1000);
  };

  return (
    <>
    <Headers />
    <div className="full"> 
    <div className="payment-container">
      <h2>Enter Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" maxLength="16" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Cardholder Name</label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" name="expiry" maxLength="5" placeholder="MM/YY" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="password" name="cvv" maxLength="3" required onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="pay-btn">Pay Now</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default PaymentPage;
