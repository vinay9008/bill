// src/components/Billing.js
import React from 'react';

const Billing = ({ cartItems }) => {
  const total = cartItems.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>Billing Summary</h2>
      <p>Total Amount: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Billing;
