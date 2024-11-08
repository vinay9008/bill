import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Billing from './components/Billing';

function App() {
  const [products] = useState([
    { id: 1, name: 'Milk', price: 2.5 },
    { id: 2, name: 'Bread', price: 1.5 },
    { id: 3, name: 'Cheese', price: 3.0 },
  ]);
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Supermarket Billing System</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Billing cartItems={cartItems} />
    </div>
  );
}

export default App;
