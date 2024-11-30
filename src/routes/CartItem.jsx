import React from "react";

const CartItem = ({ product }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-16 w-16 object-cover rounded-lg"
        />
        <div>
          <div className="font-semibold">{product.name}</div>
          <div className="text-sm text-gray-500">Color: {product.color}</div>
          <div className="text-sm text-gray-500">Price: ${product.price}</div>
        </div>
      </div>
      <div className="flex items-center mt-3">
        <button
          onClick={product.onDecrease}
          className="bg-gray-200 px-2 py-1 rounded-l-lg"
        >
          -
        </button>
        <div className="px-4 border">{product.quantity}</div>
        <button
          onClick={product.onIncrease}
          className="bg-gray-200 px-2 py-1 rounded-r-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
