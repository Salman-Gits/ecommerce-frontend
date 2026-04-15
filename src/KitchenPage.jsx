import React from "react";
import "./CategoryGrid.css";
import one from '../src/components/kitchen/pan.webp'
import two from '../src/components/kitchen/blender.jpg'
import three from '../src/components/kitchen/knife.avif'
import four from '../src/components/kitchen/owen.webp'
import five from '../src/components/kitchen/coff.webp'
import six from '../src/components/kitchen/dish.jpg'

const KitchenPage = ({ addToCart }) => {
  const kitchenItems = [
    { name: "Non-Stick Pan", price: 30, image: one },
    { name: "Blender", price: 80, image: two },
    { name: "Knife Set", price: 45, image: three },
    { name: "Microwave Oven", price: 150, image: four },
    { name: "Coffee Maker", price: 100, image: five },
    { name: "Dish Rack", price: 25, image: six },
  ];

  return (
    <div className="category-grid" style={{ backgroundColor: "#dfe6e9 " }}>
      <h2>Kitchen Collection</h2>
      <div className="grid">
        {kitchenItems.map((product, index) => (
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

export default KitchenPage;
