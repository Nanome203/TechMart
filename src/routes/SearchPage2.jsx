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
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  // State for filters
  const [filters, setFilters] = useState({
    categories: [],
    price: [0, 250],
    rating: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, [keyword, currentPage, filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/products/search/keyword`,
        {
          params: {
            keyword,
            top_n: 10,
          },
        },
      );
      console.log("res", response.data);
      const { products, totalPages } = response.data;
      setResults(products || []);
      setTotalPages(totalPages || 1);
      setError(null);
    } catch (error) {
      setError("Tìm kiếm thất bại");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

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
          products={results}
          filters={filters}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <Footersignup />
    </div>
  );
}

export default SearchPage2;
