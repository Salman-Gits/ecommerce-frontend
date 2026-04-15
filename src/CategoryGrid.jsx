import React from "react";
import "./CategoryGrid.css";

const CategoryGrid = ({ title, products, addToCart }) => {
  return (
    
    <div className="category-grid">
      <h2>{title}</h2>
      <div className="grid">
        {products.map((product, index) => (
          <div key={index} className="card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p> ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
