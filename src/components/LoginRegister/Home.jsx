import React, { useEffect, useState } from "react";
import "./Home.css";

import lap2 from "./laptop2.jpg";
import shoes from "./shoe1.jpg";
import homes from "./homes.jpg";
import dressing from "./dressing.jpg";

const images = [dressing, lap2, shoes, homes];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="home-section">

      {/* 🔥 Floating Text */}
      <div className="hero-text">
        <h1>Big Deals on Offers</h1>
        <p>Up to 70% OFF Today</p>
        <button className="shop-btn">Shop Now</button>
      </div>

      {/* 🔥 Slider */}
      <div className="slideshow-container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="slide"
            className={`slide ${i === index ? "active" : ""}`}
          />
        ))}

        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active-dot" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;