import React, { useState } from "react";

const ProductCard = () => {
  // State để kiểm tra trạng thái click của nút trái tim
  const [isFavorited, setIsFavorited] = useState(false);

  // Hàm xử lý click
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 border relative">
      {/* Sale badge */}
      <div className="relative">
        <img
          src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xm font-bold py-1 px-2 w-[60px] h-[30px] rounded-2xl text-center  ">
          -59%
        </span>
        {/* Nút trái tim */}
        <button
          onClick={toggleFavorite} // Gọi hàm khi click
          className={`absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg border transform hover:scale-110 transition-transform ${
            isFavorited ? "text-red-500 border-red-500" : "text-gray-500 border-gray-300"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorited ? "currentColor" : "none"} // Đổ màu nếu đã được yêu thích
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.374 6.374 0 0116.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-700">
          City Scene - Queen Comforter Set, Smooth & ...
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            4.5
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">$60.99</span>
          <span className="text-sm line-through text-gray-500">$149.99</span>
        </div>
        <div className="mt-3 w-1/2 text-black text-base  font-medium  py-2 rounded transition border-black border-2 rounded-2xl text-center cursor-pointer bg-white hover:bg-[#0071CE] hover:text-white">
        <i class="fa-duotone fa-solid fa-cart-plus"></i>  
        <span> Add </span>
        </div>  
      </div>
    </div>
  );
};

export default ProductCard;
