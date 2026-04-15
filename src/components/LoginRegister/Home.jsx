import React, { useEffect, useState } from 'react'
import './Home.css'
import lap2 from './laptop2.jpg'
import shoes from './shoe1.jpg'
import homes from './homes.jpg'
import dressing from './dressing.jpg'


// import bg from './bg.jpg'
// import OpenPage from './components/LoginRegister/OpenPage';


const images=[
  dressing,lap2,shoes,homes
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2900); // Auto change every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
   
    <div className='overall'>
    <div className="slideshow-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Slideshow"
          className={`slide ${i === index ? "active" : ""}`}
        />
      ))}

      {/* Navigation Buttons */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Dots for navigation */}
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
    
  )
}

export default Home