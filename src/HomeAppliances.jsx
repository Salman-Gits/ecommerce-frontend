import React from "react";
import "./CategoryGrid.css"; // Import the CSS for styling
import wash from '../src/components//home/washing.jpg'
import ref from '../src/components//home/ref.jpeg'
import heater from '../src/components//home/heater.jpg'
import air from '../src/components//home/air.jpg'
import vaccum from '../src/components//home/vaccum.jpg'
import water from '../src/components//home/puri.png'


const HomeAppliances = ({ addToCart }) => {
  // Sample data for home appliances products
  const Appliances = [
    { id: 1, name: "Washing Machine", price: 500, image: wash },
    { id: 2, name: "Refrigerator", price: 700, image: ref },
    { id: 3, name: "Water Heater", price: 300, image: heater },
    { id: 4, name: "Air Conditioner", price: 1200, image: air },
    { id: 5, name: "Vacuum Cleaner", price: 200, image: vaccum },
    { id: 6, name: "Water Purifier", price: 150, image: water},
  ];

  return (
        <div className="category-grid" style={{background: "linear-gradient(to right,rgb(143, 203, 197),rgb(139, 208, 203))"}} >
          <h2>Home Appliances</h2>
          <div className="grid">
            { Appliances.map((product, index) => (
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

export default HomeAppliances;

