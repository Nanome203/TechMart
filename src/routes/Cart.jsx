import React, { useState } from "react";
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
  const navigate = useNavigate();
  const { startFormatted, endFormatted } = calculateShippingDates();
  const [isExpanded, setIsExpanded] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Exclusive Royal Sofa Set",
      price: 139.0,
      originalPrice: 180.0,
      color: "Mint",
      quantity: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ74nRT0_7Krib7ZUAS3kRx76sc6xL590bQ&s",
    },
    {
      id: 2,
      name: "Elegant Coffee Table Decor Set",
      price: 89.0,
      originalPrice: 120.0,
      color: "Ivory white",
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81lxJCa-JBL.jpg",
    },
    {
      id: 3,
      name: "Contemporary Modern Chair Set",
      price: 125.0,
      originalPrice: 150.0,
      color: "Midnight blue",
      quantity: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuA-tmiyt3MGr3BNortsuxGGizg4CZAfesw&s",
    },
  ]);

  const [suggestedProducts] = useState([
    {
      id: 4,
      name: "Modern Area Rug",
      price: 75.99,
      originalPrice: 120.0,
      image:
        "https://m.media-amazon.com/images/I/91dkdJdaM3L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 5,
      name: "Minimalist Desk Lamp",
      price: 45.0,
      originalPrice: 60.0,
      image:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbm4-lqfkclongnvieb",
    },
    {
      id: 6,
      name: "Elegant Wall Clock",
      price: 50.0,
      originalPrice: 85.0,
      image: "https://images-na.ssl-images-amazon.com/images/I/61Z+u9Px7XL.jpg",
    },
    {
      id: 7,
      name: "Elegant Wall Clock",
      price: 50.0,
      originalPrice: 85.0,
      image: "https://images-na.ssl-images-amazon.com/images/I/61Z+u9Px7XL.jpg",
    },
  ]);

  const updateQuantity = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product,
      ),
    );
  };

  const removeItem = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  const calculateSubtotal = () => {
    return products
      .reduce(
        (total, product) => total + product.originalPrice * product.quantity,
        0,
      )
      .toFixed(2);
  };

  const calculateSavings = () => {
    return products
      .reduce(
        (total, product) =>
          total + (product.originalPrice - product.price) * product.quantity,
        0,
      )
      .toFixed(2);
  };

  const calculateTotal = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="mb-5 ms-7 mt-10 text-2xl">
        <span className="font-semibold">Shopping cart</span>
        <span className="ms-2">({products.length} items)</span>
      </div>
      <div className="flex min-h-screen flex-col justify-between bg-gray-100 px-6 py-4 md:flex-row">
        {/* Left Section */}
        <div className="flex w-full flex-col space-y-6 md:w-2/3">
          {/* Cart Items */}
          <div className="rounded-lg bg-white p-4 shadow">
            <div className="my-4 rounded-lg bg-blue-100 p-4">
              <span className="text-l font-medium">
                Free shipping, arrives between <b>{startFormatted}</b> –{" "}
                <b>{endFormatted}</b>
              </span>
            </div>

            {/* Header: Expand/Collapse */}
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="text-lg font-semibold">
                {products.length} items
              </div>
              <button className="text-2xl text-gray-500 focus:outline-none">
                {isExpanded ? "▲" : "▼"}
              </button>
            </div>

            {/* Collapsed Images */}
            {!isExpanded && (
              <div className="mt-3 flex space-x-2">
                {products.map((product) => (
                  <img
                    key={product.id}
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                ))}
              </div>
            )}

            {/* Expanded Product List */}
            {isExpanded && (
              <div className="mt-4 space-y-4">
                {products.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    onIncrease={() => updateQuantity(product.id, 1)}
                    onDecrease={() => updateQuantity(product.id, -1)}
                    onRemove={() => removeItem(product.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* "You Might Also Like" Section */}
          <div className="rounded-lg bg-white p-4 shadow">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">You Might Also Like</span>
              <button className="font-medium text-blue-500">See all</button>
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {suggestedProducts.map((product) => (
                <ProductTag
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  stars={4.5}
                  discountedPrice={product.price}
                  originalPrice={product.originalPrice}
                  discountPercentage={Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100,
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="me-5 mt-6 h-[400px] w-full rounded-lg bg-white p-4 pt-10 shadow md:mt-0 md:w-1/4">
          <button
            className="mb-4 w-full rounded-3xl bg-[#0071CE] py-2 text-lg font-medium text-white"
            onClick={() => {
              navigate("/payment", {
                state: {
                  products,
                },
              });
            }}
          >
            Continue to checkout
          </button>
          <div className="text-20 mb-2 flex justify-between text-gray-500">
            <span>Subtotal ({products.length} items)</span>
            <span className="text-lg font-semibold line-through">
              ${calculateSubtotal()}
            </span>
          </div>
          <div className="text-20 mb-2 flex justify-between text-gray-500">
            <span>Saving</span>
            <span className="text-lg font-semibold text-green-500">
              ${calculateSavings()}
            </span>
          </div>
          <div className="text-20 mb-2 flex justify-between text-gray-500">
            <span></span>
            <span className="text-lg font-semibold">${calculateTotal()}</span>
          </div>
          <hr className="my-2" />
          <div className="text-20 mb-2 flex justify-between text-gray-500">
            <span>Shipping</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="text-20 mb-2 flex justify-between text-gray-500">
            <span>Taxes</span>
            <span>Calculated at checkout</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Estimated total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
      </div>
      <Footersignup />
    </div>
  );
};

export default Cart;
