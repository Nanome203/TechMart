import React, { useState, useEffect } from "react";
import Header from "./SearchPageComponents/Header";
import Sidebar from "./SearchPageComponents/Sidebar";
import ProductGrid2 from "./SearchPageComponents/ProductGrid2";
import Footersignup from "../atoms/Footersignup";
import { useParams } from "react-router-dom";
import axios from "axios";

function SearchPage2() {
  const { keyword } = useParams();
  console.log("keyword", keyword);
  const [allProducts, setAllProducts] = useState([]); // Lưu toàn bộ sản phẩm
  const [results, setResults] = useState([]); // Sản phẩm hiển thị trên trang hiện tại
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const PRODUCTS_PER_PAGE = 20; // Số sản phẩm hiển thị mỗi trang

  // State for filters
  const [filters, setFilters] = useState({
    categories: [],
    price: [0, 250],
    rating: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, [keyword, filters]); // Chỉ gọi lại khi `keyword` hoặc `filters` thay đổi

  // Lấy tất cả sản phẩm từ API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/products/search/keyword`,
        {
          params: {
            keyword,
            top_n: 200,
          },
        },
      );
      console.log("res", response.data);
      const { products } = response.data;

      if (products) {
        setAllProducts(products); // Lưu tất cả sản phẩm vào state
        setTotalPages(Math.ceil(products.length / PRODUCTS_PER_PAGE)); // Tính tổng số trang
        setError(null);
      } else {
        throw new Error("Không tìm thấy sản phẩm");
      }
    } catch (error) {
      setError("Tìm kiếm thất bại");
      setAllProducts([]);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Cập nhật sản phẩm hiển thị khi `currentPage` thay đổi
  useEffect(() => {
    const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIdx = startIdx + PRODUCTS_PER_PAGE;
    setResults(allProducts.slice(startIdx, endIdx)); // Hiển thị sản phẩm theo trang
  }, [allProducts, currentPage]); // Chỉ cập nhật khi `allProducts` hoặc `currentPage` thay đổi

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset về trang 1 khi thay đổi bộ lọc
  };

  return (
    <div>
      <Header searchQuery={keyword || "All"} />
      <div className="flex">
        <Sidebar onFilterChange={handleFilterChange} />
        <ProductGrid2
          products={results} // Dữ liệu sản phẩm hiển thị trên trang hiện tại
          filters={filters}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage} // Cập nhật `currentPage` khi chuyển trang
        />
      </div>
    </div>
  );
}

export default SearchPage2;
