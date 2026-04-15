import React from "react";
import "./CategoryGrid.css";
import apple from '../src/components/fruits/apple.jpg'
import Banana from '../src/components/fruits/banana.jpg'
import Orange from '../src/components/fruits/orange.jpg'
import Strawberry from '../src/components/fruits/straw.jpg'
import Pineapple from '../src/components/fruits/pine.webp'
import Mango from '../src/components/fruits/mango.jpg'


const FruitsPage = ({ addToCart }) => {
  const fruits = [
    { name: "Apple", price: 3, image: apple},
    { name: "Banana", price: 1, image:Banana },
    { name: "Orange", price: 2, image: Orange},
    { name: "Strawberry", price: 5, image:Strawberry },
    { name: "Pineapple", price: 4, image:Pineapple },
    { name: "Mango", price: 3.5, image: Mango },
  ];

  return (
    <div className="category-grid"
    style={{ backgroundColor: "#fff9c4" }}
      >
      <h2>Fresh Fruits</h2>
      <div className="grid">
        {fruits.map((product, index) => (
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

export default FruitsPage;
