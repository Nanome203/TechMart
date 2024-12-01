import React, { useState, useEffect } from "react";
import Pagination from "../../atoms/Pagination";
import ProductTag from "../../atoms/ProductTag";

const PRODUCTS_PER_PAGE = 20;

const ProductGrid = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://martech-backend.onrender.com/api/recommendations/hCT0x9JiGXBQ?top_n=30",
        ); // Thay URL_API_CỦA_BẠN bằng URL thực tế
        const data = await response.json();
        setProducts(data.recommendations); // Lấy danh sách sản phẩm từ API
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

  if (isLoading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  return (
    <div className="w-3/4 p-4">
      <div className="mb-5">
        <span>
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}{" "}
          of {filteredProducts.length} results
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}{" "}
          of {filteredProducts.length} results
        </span>
      </div>

      <div className="grid grid-cols-4 gap-x-28 gap-y-3">
        {productsToShow.map((product) => (
          <ProductTag
            key={product.product_id}
            id={product.product_id}
            name={product.descript}
            image={product.image}
            discountedPrice={product.price} // Sử dụng giá từ API
            originalPrice={product.price * 1.2} // Tính giá cũ giả định
            stars={5}
          />
        ))}
      </div>

      <div className="flex justify-center p-10">
      <div className="flex justify-center p-10">
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductGrid;
