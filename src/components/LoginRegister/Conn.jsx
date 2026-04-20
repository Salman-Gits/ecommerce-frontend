import React from 'react'
import Home from './Home'
import Product from './Product'
import Headers from './Headers'
import AboutPage from './AboutPage'
import './Conn.css'

export const Conn = () => {
  return (
    <div className="conn-container">

      <Headers />

      <section className="home-section">
        <Home />
      </section>

      <section className="product-section">
        <Product />
      </section>

      <section className="about-section">
        <AboutPage />
      </section>

    </div>
  )
}

export default Conn;