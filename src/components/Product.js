// src/components/Product.js
import React from 'react';

const Product = ({ product, removeFromCart }) => (
  <div>
    <span>{product.name} - ${product.price}</span>
    <button onClick={() => removeFromCart(product.id)}>Remove</button>
  </div>
);

export default Product;
