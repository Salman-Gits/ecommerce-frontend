import React from 'react'
import './Headers.css'
// import { IoCartSharp } from "react-icons/io5";
// import { Link } from 'react-router-dom';


const Headers = () => {
  return (
    <div className='over'>
      <header className="header">
        <a href="/home" className="logo">SeeUsoon</a>
        <nav className="navbar">
          <a href="/home">Home</a>
          <a href="/clothing">Clothing</a>
          <a href="/Electronics">Electronic</a>
          <a href="/kitchen">Kitchen</a>
          <a href="#about-section">About</a>
          
          </nav>
      </header>
    </div>
  );
}

export default Headers