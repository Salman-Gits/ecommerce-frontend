import React from "react";
import "./CategoryGrid.css";
import shoe1 from '../src/components/shoes/run.jpg'
import shoe2 from '../src/components/shoes/women.webp'
import shoe3 from '../src/components/shoes/kids.jpg'
import shoe4 from '../src/components/shoes/mens.webp'
import shoe5 from '../src/components/shoes/heels.jpg'
import shoe6 from '../src/components/shoes/uni.webp'

const ShoesPage = ({ addToCart }) => {
  const shoes = [
    { name: "Men's Running Shoes", price: 99, image:shoe1 },
    { name: "Women's Sneakers", price: 89, image: shoe2 },
    { name: "Kids' Sports Shoes", price: 69, image: shoe3 },
    { name: "Men's Formal Shoes", price: 120, image: shoe4 },
    { name: "Women's High Heels", price: 95, image:shoe5 },
    { name: "Unisex Casual Shoes", price: 75, image:shoe6 },
  ];

  return (
    <div className="category-grid" style={{ backgroundColor: "#d8b4f8"}}>
      <h2>Shoes Collection</h2>
      <div className="grid">
        {shoes.map((product, index) => (
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

export default ShoesPage;
