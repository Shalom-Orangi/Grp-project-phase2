import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart = (title, price, image, id) => {
    setItems((prevState) => [...prevState, { title, price, image, id }]);
  };
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
