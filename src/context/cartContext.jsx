import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    return cart.reduce((acum, i) => acum + i.cantidad * i.precio, 0);
  };

  const deleteItem = (id) => {
    const items = cart.filter((product) => product.id !== id);
    setCart(items);
    return;
  };

  const IconCart = () => {
    return cart.reduce((acum, i) => acum + i.cantidad, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        emptyCart,
        deleteItem,
        totalPrice,
        IconCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
