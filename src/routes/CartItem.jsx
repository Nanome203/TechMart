import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-20 w-20 rounded-lg object-cover"
          />
          <div>
            <div className="text-xl font-semibold">{product.name}</div>
            <div className="font-semibolt text-xl text-gray-500">
              Color: Original
            </div>
            <div className="font-semibolt text-xl text-gray-500">
              Price for one: ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
        <button
          onClick={onRemove}
          className="p-2 text-red-500 hover:text-red-700"
          title="Remove item"
        >
          <FaTrash className="text-lg" />
        </button>
      </div>
      <div className="mt-3 flex items-center">
        <button
          onClick={onDecrease}
          className="rounded-l-lg bg-gray-200 px-2 py-1"
        >
          -
        </button>
        <div className="border px-4">{product.quantity}</div>
        <button
          onClick={onIncrease}
          className="rounded-r-lg bg-gray-200 px-2 py-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
