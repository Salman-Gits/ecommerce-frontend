import React, { useState, useEffect } from 'react';
import './Headers.css';

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="header">

      {/* LEFT - LOGO */}
      <a href="/home" className="logo">SeeUsoon</a>

      {/* RIGHT - MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* MENU */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <a href="/home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/clothing" onClick={() => setMenuOpen(false)}>Clothing</a>
        <a href="/electronics" onClick={() => setMenuOpen(false)}>Electronics</a>
        <a href="/kitchen" onClick={() => setMenuOpen(false)}>Kitchen</a>
        <a href="#about-section" onClick={() => setMenuOpen(false)}>About</a>
      </nav>

    </header>
  );
};

export default Headers;