import React from "react";
import "./CategoryGrid.css"; 
import one from '../src/components/electronics/phone.avif'
import two from '../src/components/electronics/lap.jpg'
import three from '../src/components/electronics/watch.jpg'
import four from '../src/components/electronics/ear.webp'
import five from '../src/components/electronics/tab.avif'
import six from '../src/components/electronics/game.avif'

const ElectronicsPage = ({ addToCart }) => {
  const electronics = [
    { name: "Smartphone", price: 699, image: one },
    { name: "Laptop", price: 1299, image: two },
    { name: "Smartwatch", price: 199, image:three },
    { name: "Wireless Earbuds", price: 99, image:four },
    { name: "Tablet", price: 499, image: five },
    { name: "Gaming Console", price: 399, image:six },
  ];

  return (
    <div className="category-grid" style={{ backgroundColor: "#1e3a5f" }}>
      <h2 style={{color:"white"}}>Electronics Collection</h2>
      <div className="grid">
        {electronics.map((product, index) => (
          <div key={index} className="card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsPage;
