import React, { useState } from "react";

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
    <aside className="h-full w-1/6 border-r bg-gray-50 p-4">
      <h1 className="mb-4 text-xl font-semibold">Filter Option</h1>
      <hr className="my-4" style={{ borderColor: "black" }} />

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium">Price</h3>
        <div className="mb-2 flex items-center justify-between text-sm">
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
            className="w-full cursor-pointer"
          />
        </div>
        <div className="mt-2 text-center text-sm">
          ${price[0]} - ${price[1]}
        </div>
        <div className="flex justify-center">
          <button
            className="mt-5 rounded-2xl border border-[#1173BE] px-4 py-2 text-sm text-[#1173BE] hover:bg-gray-200"
            onClick={resetPrice}
          >
            Clear
          </button>
        </div>
      </div>
      <hr className="my-4" style={{ borderColor: "black" }} />

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium">Rating</h3>
        <div className="relative flex items-center justify-between">
          <span className="absolute left-0 right-0 top-1/2 z-0 h-[2px] bg-gray-300"></span>
          {[0, 1, 2, 3, 4].map((star) => (
            <div
              key={star}
              className={`relative z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ${rating === star ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => handleRatingChange(star)}
            >
              <span className="text-xs">{star}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-sm">{rating} Stars and Above</div>
        <div className="flex justify-center">
          <button
            className="mt-5 rounded-2xl border border-[#1173BE] px-4 py-2 text-sm text-[#1173BE] hover:bg-gray-200"
            onClick={resetRating}
          >
            Clear
          </button>
        </div>
      </div>
      <hr className="my-4" style={{ borderColor: "black" }} />
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-medium">Category</h3>
        <ul className="mt-2 h-[260px] overflow-y-auto bg-[#D9D9D9]">
          {[
            "Livingroom",
            "Bedroom",
            "Furniture",
            "Lamp",
            "Table",
            "Bed",
            "Television",
            "Carpet",
            "Pillow",
            "Sofa",
            "Decoration",
          ].map((category) => (
            <li key={category} className="mb-3 ms-2 mt-3 flex items-center">
              <input
                type="checkbox"
                id={category}
                onChange={(e) =>
                  handleCategoryChange(category, e.target.checked)
                }
              />
              <label htmlFor={category} className="ml-2">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4" style={{ borderColor: "black" }} />
    </aside>
  );
};

export default Sidebar;
