import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-medium">{product.name}</h3>
      <div className="text-gray-500 text-sm">{product.description}</div>
      <div className="mt-2">
        <span className="text-green-600 font-semibold">${product.price}</span>{' '}
        <span className="line-through text-gray-400">${product.oldPrice}</span>
      </div>
      <button className="bg-blue-500 text-white mt-2 w-full py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
