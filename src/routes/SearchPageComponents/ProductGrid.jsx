import React, { useState } from "react";
import Pagination from "../../atoms/Pagination";
import ProductTag from "../../atoms/ProductTag";

const PRODUCTS_PER_PAGE = 20;

// Sample products (could be replaced by an API call)
const products = Array.from({ length: 500 }).map((_, index) => ({
  id: index + 1,
  name: `Sofa ${index + 1}`,
  description: "Ngon bo re",
  price: 20 + index,
  oldPrice: 25 + index,
  image: "",
  stars: (Math.random() * 5).toFixed(1),
  category: ["Livingroom", "Bedroom", "Furniture"][index % 3], // Sample categories
}));

const ProductGrid = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Apply filters
  const filteredProducts = products.filter((product) => {
    const matchesPrice =
      product.price >= filters.price[0] && product.price <= filters.price[1];
    const matchesRating = product.stars <= filters.rating || product.stars == 0;
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);
    return matchesPrice && matchesRating && matchesCategory;
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-3/4 p-4">
      <div className="mb-5">
        <span>
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}{" "}
          of {filteredProducts.length} results
        </span>
      </div>

      <div className="grid grid-cols-5 gap-x-28 gap-y-3">
        {productsToShow.map((product) => (
          <ProductTag
            discountPercentage={50}
            // image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
            // image="https://cdn.viettelstore.vn/Images/Product/ProductImage/594842402.jpeg"
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS83rckFJZZJ2fmOj4Y8VuNniusTmzTwDk10965KiS5fZUdGgHFY7_z0NDwOYI9XqR4RZL95KajVKEQtw13U-HwO62CWkmQ5dOM0jPV8Lo&usqp=CAE"
            name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
            stars={5}
            discountedPrice={100}
            originalPrice={200}
            id="MVNIoKNH3UsB"
          />
        ))}
      </div>

      <div className="flex justify-center p-10">
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductGrid;
