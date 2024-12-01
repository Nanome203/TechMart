import React, { useState, useEffect } from "react";
import Header from "../SearchPageComponents/Header";
import Sidebar from "../SearchPageComponents/Sidebar";
import ProductGrid2 from "../SearchPageComponents/ProductGrid2";
import Footersignup from "../../atoms/Footersignup";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]); // Lưu toàn bộ sản phẩm
  const [results, setResults] = useState([]); // Sản phẩm hiển thị trên trang hiện tại
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const PRODUCTS_PER_PAGE = 20; // Số sản phẩm hiển thị mỗi trang

  const [filters, setFilters] = useState({
    categories: [],
    price: [0, 250],
    rating: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, [category, filters]);

  useEffect(() => {
    // Cập nhật sản phẩm hiển thị khi `currentPage` thay đổi
    const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIdx = startIdx + PRODUCTS_PER_PAGE;
    setResults(allProducts.slice(startIdx, endIdx));
  }, [allProducts, currentPage]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/products/category/${category}`,
        {
          params: {
            top_n: 200,
          },
        },
      );
      console.log("res", response.data);
      const { products } = response.data;

      if (products) {
        setAllProducts(products); // Lưu toàn bộ sản phẩm
        setTotalPages(Math.ceil(products.length / PRODUCTS_PER_PAGE)); // Tính tổng số trang
        setCurrentPage(1); // Reset về trang đầu tiên
        setError(null);
      } else {
        throw new Error("Không tìm thấy sản phẩm");
      }
    } catch (error) {
      setError("Không thể tải sản phẩm theo danh mục");
      setAllProducts([]);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset về trang đầu khi thay đổi bộ lọc
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <Header searchQuery={category || "All"} />
      <div className="flex">
        <Sidebar onFilterChange={handleFilterChange} />
        <ProductGrid2
          products={results}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footersignup />
    </div>
  );
}

export default CategoryPage;