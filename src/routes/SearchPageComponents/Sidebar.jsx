import React, { useState } from 'react';

const Sidebar = ({ onFilterChange }) => {
  const [price, setPrice] = useState([0, 250]);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Xử lý khi thay đổi giá trị của Price
  const handlePriceChange = (e, index) => {
    const newPrice = [...price];
    newPrice[index] = parseInt(e.target.value);
    setPrice(newPrice);

    // Gửi dữ liệu bộ lọc lên App
    onFilterChange({ price: newPrice, rating, categories: selectedCategories });
  };

  // Xử lý khi thay đổi Rating
  const handleRatingChange = (star) => {
    setRating(star);
    onFilterChange({ price, rating: star, categories: selectedCategories });
  };

  // Xử lý khi thay đổi Category
  const handleCategoryChange = (category, isChecked) => {
    setSelectedCategories((prevSelected) => {
      const updatedCategories = isChecked
        ? [...prevSelected, category]
        : prevSelected.filter((item) => item !== category);
      
      // Gửi dữ liệu bộ lọc lên App
      onFilterChange({ price, rating, categories: updatedCategories });
      return updatedCategories;
    });
  };

  // Reset các bộ lọc
  const resetPrice = () => {
    setPrice([0, 250]);
    onFilterChange({ price: [0, 250], rating, categories: selectedCategories });
  };

  const resetRating = () => {
    setRating(0);
    onFilterChange({ price, rating: 0, categories: selectedCategories });
  };

  return (
    <aside className="w-1/6 h-full p-4 bg-gray-50 border-r">
      <h2 className="text-xl font-semibold mb-4">Filter Option</h2>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Price</h3>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>$0</span>
          <span>$250+</span>
        </div>
        <div className="flex gap-2">
          <input
            type="range"
            min="0"
            max="250"
            value={price[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-full"
          />
        </div>
        <div className="text-center text-sm mt-2">
          ${price[0]} - ${price[1]}
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 mt-5 border border-gray-400 rounded text-sm hover:bg-gray-100"
            onClick={resetPrice}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Rating</h3>
        <div className="flex relative items-center justify-between">
          <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-300 z-0"></span>
          {[0, 1, 2, 3, 4].map((star) => (
            <div
              key={star}
              className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${rating === star ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => handleRatingChange(star)}
            >
              <span className="text-xs">{star}</span>
            </div>
          ))}
        </div>
        <div className="text-center text-sm mt-2">
          {rating} Stars and Above
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 mt-5 border border-gray-400 rounded text-sm hover:bg-gray-100"
            onClick={resetRating}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-medium">Category</h3>
        <ul className="mt-2 bg-gray-300 h-[260px] overflow-y-auto">
          {['Livingroom', 'Bedroom', 'Furniture', 'Lamp', 'Table', 'Bed', 'Television', 'Carpet', 'Pillow', 'Sofa', 'Decoration'].map((category) => (
            <li key={category} className="flex items-center ms-2 mt-3 mb-3">
              <input
                type="checkbox"
                id={category}
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
              />
              <label htmlFor={category} className="ml-2">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
