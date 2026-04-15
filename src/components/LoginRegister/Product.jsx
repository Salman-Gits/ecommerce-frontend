import React from 'react'
import './Product.css'

import electronic from './electronic.jpeg';
import shoe from './shoe.jpeg';
import mobile2 from './mobile2.jpg';
import dress2 from './dress2.jpg';
import kitchen from './kitchen.jpg';
import home2 from './home2.jpg'
import { useNavigate } from 'react-router-dom';


const Product = () => {
  const navigate = useNavigate();
    const products = [
        { id: 1, name: "Clothing",  image: dress2 ,path: "/clothing"},
        { id: 2, name: "Mobile",   image: mobile2,path: "/electronics" },
        { id: 3, name: "Laptops",  image: electronic ,path: "/celectronics" },
        { id: 4, name: "Shoes", image: shoe ,path: "/shoes" },
        { id: 5, name: "Kitchen",  image: kitchen ,path: "/kitchen" },
        { id: 6, name: "Home Aplliances",  image: home2,path: "/HomeAppliances" }
      ];
    
      return (
        <div className="home-container">
          <h1>Welcome to Our E-Commerce Store</h1>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <button onClick={() => navigate(product.path)} className="view-btn">View Details</button>
              </div>
            ))}
          </div>
        </div>
      );
    
};

export default Product