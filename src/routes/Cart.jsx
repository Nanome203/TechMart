import React, { useState } from "react";
import CartItem from "./CartItem.jsx"; // Ensure this file exists and is correct
import Footersignup from "../atoms/Footersignup";

// Hàm tính toán ngày giao hàng
const calculateShippingDates = () => {
  const today = new Date();

  // Tính ngày bắt đầu (today + 2 ngày)
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 2);

  // Tính ngày kết thúc (startDate + 2 ngày)
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 2);

  // Định dạng ngày với các tùy chọn
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  // Định dạng ngày bắt đầu và ngày kết thúc
  const startFormatted = formatDate(startDate);
  const endFormatted = formatDate(endDate);

  return { startFormatted, endFormatted };
};

const Cart = () => {
  const { startFormatted, endFormatted } = calculateShippingDates();
  const [isExpanded, setIsExpanded] = useState(false);

  const products = [
    {
      id: 1,
      name: "Exclusive Royal Sofa Set",
      price: "139.00",
      color: "Mint",
      quantity: 1,
      extraDetails:
        "Features high-density foam cushions, sturdy hardwood frame, and hand-stitched detailing for lasting elegance.",
      image: "https://via.placeholder.com/80",
      onIncrease: () => console.log("Increase quantity for product 1"),
      onDecrease: () => console.log("Decrease quantity for product 1"),
    },
    {
      id: 2,
      name: "Elegant Coffee Table Decor Set",
      price: "89.00",
      color: "Ivory white",
      quantity: 1,
      extraDetails:
        "Includes a decorative tray, artificial succulent, and candle holder for a complete look.",
      image: "https://via.placeholder.com/80",
      onIncrease: () => console.log("Increase quantity for product 2"),
      onDecrease: () => console.log("Decrease quantity for product 2"),
    },
    {
      id: 3,
      name: "Contemporary Modern Chair Set",
      price: "125.00",
      color: "Midnight blue",
      quantity: 1,
      extraDetails:
        "Built with ergonomic support, soft upholstery, and a sleek metal frame for durability and comfort.",
      image: "https://via.placeholder.com/80",
      onIncrease: () => console.log("Increase quantity for product 3"),
      onDecrease: () => console.log("Decrease quantity for product 3"),
    },
  ];

  return (
    <div>
      <div className="mt-10 mb-5 ms-7 text-2xl">
        <span className="font-semibold">Shopping cart</span>
        <span className="ms-2">({products.length} items)</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-6 py-4 bg-gray-100 min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-2/3 space-y-6">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="bg-blue-100 p-4 rounded-lg my-4">
                
              <span className="text-l font-medium">
                Free shipping, arrives between <b>{startFormatted}</b> –{" "}
                <b>{endFormatted}</b>
              </span>
            </div>

            {/* Header: Thu gọn */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="text-lg font-semibold">
                {products.length} items
              </div>
              <button className="text-gray-500 text-2xl focus:outline-none">
                {isExpanded ? "▲" : "▼"}
              </button>
            </div>

            {/* Hình ảnh sản phẩm: Hiển thị khi thu gọn */}
            {!isExpanded && (
              <div className="flex space-x-2 mt-3">
                {products.map((product) => (
                  <img
                    key={product.id}
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* Danh sách chi tiết: Hiển thị khi xổ ra */}
            {isExpanded && (
              <div className="mt-4 space-y-4">
                {products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

          {/* "You Might Also Like" Section */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">You Might Also Like</span>
              <button className="text-blue-500 font-medium">See all</button>
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {/* Product Card */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white shadow rounded-lg p-3 w-56"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product"
                    className="rounded-lg mb-3 h-40 object-cover"
                  />
                  <div className="text-sm font-semibold">
                    City Scene - Queen Comforter Set, Smooth & ...
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-green-500 font-bold">$60.99</span>
                    <span className="line-through text-gray-400">$149.99</span>
                  </div>
                  <button className="mt-2 bg-blue-500 text-white text-sm py-1 px-2 rounded-lg">
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4 mt-6 md:mt-0 me-5 h-[400px] pt-10">
          <button className="w-full bg-[#0071CE] text-white py-2 rounded-3xl font-medium text-lg mb-4">
            Continue to checkout
          </button>
          <div className="flex justify-between text-gray-500 text-20 mb-2">
            <span>Subtotal (3 items)</span>
            <span className="line-through">$380.00</span>
          </div>
          <div className="flex justify-between text-gray-500 text-20 mb-2">
            <span>Savings</span>
            <span className="text-green-500 bg-[#DFDFDF] rounded p-1 text-20 font-semibold">
              -$11.00
            </span>
          </div>
          <div className="flex justify-between text-gray-500 text-20 mb-2">
            <span></span>
            <span className="text-green-500 font-semibold">$369.00</span>
          </div>

          <hr className="my-2" />
          <div className="flex justify-between text-gray-500 text-20 mb-2">
            <span>Shipping</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between text-gray-500 text-20 mb-2">
            <span>Taxes</span>
            <span>Calculated at checkout</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Estimated total</span>
            <span>$369.00</span>
          </div>
        </div>
      </div>
      <Footersignup />
    </div>
  );
};

export default Cart;
