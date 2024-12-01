
import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-20 w-20 object-cover rounded-lg"
          />
          <div>
            <div className="text-xl  font-semibold">{product.name}</div>
            <div className="text-xl font-semibolt text-gray-500">Color: {product.color}</div>
         
            <div className="text-xl font-semibolt text-gray-500">
              Old Price: ${(product.originalPrice * product.quantity).toFixed(2)}
            </div>
            <div className="text-xl font-semibolt text-gray-500">
              Price: ${(product.price * product.quantity).toFixed(2)}
            </div>
          </div>
        </div>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 p-2"
          title="Remove item"
        >
          <FaTrash className="text-lg" />
        </button>
      </div>
      <div className="flex items-center mt-3">
        <button onClick={onDecrease} className="bg-gray-200 px-2 py-1 rounded-l-lg">
          -
        </button>
        <div className="px-4 border">{product.quantity}</div>
        <button onClick={onIncrease} className="bg-gray-200 px-2 py-1 rounded-r-lg">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
