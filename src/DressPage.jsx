import React from "react";
import "./CategoryGrid.css";
import dress1 from '../src/components/dress/shirt.webp'
import dress2 from '../src/components/dress/gown.jpg'
import dress3 from '../src/components/dress/kids.webp'
import dress4 from '../src/components/dress/suit.avif'
import dress5 from '../src/components/dress/summer.webp'
import dress6 from '../src/components/dress/hoodie.jpg'

const DressPage = ({ addToCart }) => {
  const dresses = [
    { name: "Men's Casual Shirt", price: 45, image: dress1 },
    { name: "Women's Evening Gown", price: 120, image: dress2 },
    { name: "Kids' Party Dress", price: 60, image: dress3 },
    { name: "Men's Formal Suit", price: 200, image:  dress4},
    { name: "Women's Summer Dress", price: 75, image: dress5 },
    { name: "Unisex Hoodie", price: 50, image: dress6 },
  ];

  return (
    <div className="category-grid" style={{ backgroundColor: "#ffe6f2" }}>
      <h2>Dress Collection</h2>
      <div className="grid">
        {dresses.map((product, index) => (
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

export default DressPage;
