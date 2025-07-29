import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
