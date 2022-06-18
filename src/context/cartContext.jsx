import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cart;
  }, [cart]);

  const addToCart = (item) => {
    if (cart.find((prod) => prod.id === item.id)) {
      const sameProduct = cart.find((prod) => prod.id === item.id);
      const prodIndex = cart.indexOf(sameProduct);
      let prodArray = cart;
      prodArray[prodIndex].cantidad =
        prodArray[prodIndex].cantidad + item.cantidad;
      setCart(prodArray);
    } else {
      setCart([...cart, item]);
    }

    console.log(cart);
    console.log(item);
  };

  const removeFromCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
