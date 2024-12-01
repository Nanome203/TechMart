import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart; // Nếu sản phẩm đã có, không làm gì
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        updateTotalPrice(updatedCart);
        return updatedCart;
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      updateTotalPrice(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const updateTotalPrice = (cartItems) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0,
    );
    setTotalPrice(total);
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
      );
      updateTotalPrice(updatedCart);
      return updatedCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      updateTotalPrice(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
