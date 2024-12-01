import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; // Đường dẫn tới CartContext
import CartItem from "./CartItem.jsx";
import Footersignup from "../atoms/Footersignup";
import ProductTag from "../atoms/ProductTag.jsx";
import { useNavigate } from "react-router-dom";

const calculateShippingDates = () => {
  const today = new Date();

  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 2);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 2);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);

  return {
    startFormatted: formatDate(startDate),
    endFormatted: formatDate(endDate),
  };
};

const Cart = () => {
  const { startFormatted, endFormatted } = calculateShippingDates();
  const {
    cart,
    addToCart,
    removeFromCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  console.log(cart);

  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment"); // Điều hướng đến trang thanh toán
  };

  return (
    <div>
      <div className="mb-5 ms-7 mt-10 text-2xl">
        <span className="font-semibold">Shopping cart</span>
        <span className="ms-2">({cart.length} items)</span>
      </div>
      <div className="flex min-h-screen flex-col justify-between bg-gray-100 px-6 py-4 md:flex-row">
        {/* Left Section */}
        <div className="flex w-full flex-col space-y-6 md:w-2/3">
          <div className="rounded-lg bg-white p-4 shadow">
            <div className="my-4 rounded-lg bg-blue-100 p-4">
              <span className="text-l font-medium">
                Free shipping, arrives between <b>{startFormatted}</b> –{" "}
                <b>{endFormatted}</b>
              </span>
            </div>

            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="text-lg font-semibold">{cart.length} items</div>
              <button className="text-2xl text-gray-500 focus:outline-none">
                {isExpanded ? "▲" : "▼"}
              </button>
            </div>

            {!isExpanded && (
              <div className="mt-3 flex space-x-2">
                {cart.map((product) => (
                  <img
                    key={product.id}
                    src={product.image || ""}
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                ))}
              </div>
            )}

            {isExpanded && (
              <div className="mt-4 space-y-4">
                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    onRemove={() => removeFromCart(product.id)}
                    onIncrease={() => increaseQuantity(product.id)}
                    onDecrease={() => decreaseQuantity(product.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="me-5 mt-6 h-[400px] w-full rounded-lg bg-white p-4 pt-10 shadow md:mt-0 md:w-1/4">
          <button
            onClick={handleCheckout}
            className="mb-4 w-full rounded-3xl bg-[#0071CE] py-2 text-lg font-medium text-white"
          >
            Continue to checkout
          </button>
          <div className="mb-2 flex justify-between text-gray-500">
            <span>Total price</span>
            <span className="text-lg font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <Footersignup />
    </div>
  );
};

export default Cart;
