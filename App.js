import React, { useState } from "react";
import ProductList from "./productlist";
import products from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 E-Market</h1>
      <h2>Cart: {cart.length} items</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;
