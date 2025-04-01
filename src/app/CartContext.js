"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart (or increase quantity)
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item completely from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, change) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0) // Prevent 0 quantity
    );
  };

  // Get total quantity
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total cart price before discount
  const getTotalCartPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotalQuantity, getTotalCartPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
