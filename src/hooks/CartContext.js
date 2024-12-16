import React, { createContext, useState, useContext, useEffect } from "react";
import { serverGetCartCountData } from "../services/serverApi";
import { getUserData } from "../helper/UserHelper";

// Create the Cart Context
const CartContext = createContext();

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateCartCount = async () => {
    try {
        setLoading(true);
        const userData = getUserData();
        const res = await serverGetCartCountData(userData?._id);
        setCartCount(res?.data);
    } catch (err) {
        console.log(err);
        setLoading(false);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use Cart Context in components
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
