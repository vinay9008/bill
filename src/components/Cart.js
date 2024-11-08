// src/components/Cart.js
import React from 'react';
import Product from './Product';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((product) => (
          <Product
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
