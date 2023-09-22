// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };
  const removeFromCart = (itemName) => {
    const itemIndex = cartItems.find((cartItem) => cartItem.title === itemName);
    itemIndex.quantity = 1

    const updatedCart = cartItems.filter((item) => item.title !== itemName);
    // Update the cart state with the new copy
    // Assuming you have a function to set the cartItems in your CartContext
    setCartItems(updatedCart);
  };
  return (
    // Step 3: Provide the cart state and functions to the children components
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export {CartContext};
