import React, { useState } from 'react'
import { createContext, useContext } from 'react';
import { initialProducts } from '../data/product';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const product = initialProducts;
  const [cart, setCart] = useState([]);

  // Add to Cart function with quantity increase and no double item if added more than one time.
  const addToCart = (product) => {

    setCart((prev) => {

      // Checking the item if it exists.
      const existing = prev.find((item) => item.id === product.id)

      // Quantity increasing logic.
      if (existing) {
        return prev.map((item) => item.id === product.id

          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
      }

      // if does not alreay exists , adds it with quantity = 1.
      return [...prev, { ...product, quantity: product.quantity + 1 }];

    });

  };

  console.log(cart);


  return (
    <cartContext.Provider value={{ product, addToCart }}>
      {children}
    </cartContext.Provider>
  )
}

// Custom hook (clean approach)
export const useCart = () => {
  return useContext(cartContext);
};