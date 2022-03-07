import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import data from './Products/data';
function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <div className="content">
        <ul className="products">
            {
                data.products.map(product => 
                    <li>
                        <div className = "product">
                            <img className="product-image" src={product.imageUrl} alt="product" />
                            <div className="product-name">
                                <a href="product.html">{product.name}</a>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">{product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.numberOfReviews} Reviews)</div>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
  );
}

export default App;