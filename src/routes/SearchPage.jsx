import React, { useState, useEffect } from "react";
import Header from "./SearchPageComponents/Header";
import Sidebar from "./SearchPageComponents/Sidebar";
import ProductGrid from "./SearchPageComponents/ProductGrid";
import Footersignup from "../atoms/Footersignup";
import { useParams } from "react-router-dom";
import axios from "axios";

function SearchPage() {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://martech-backend.onrender.com/api/products/search/keyword?keyword=${keyword}`,
      )
      .then((res) => {
        if (res.data.products) {
          setResults(res.data.products);
        } else {
          setError("Tìm kiếm thất bại");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Tìm kiếm thất bại");
        setLoading(false);
      });
  }, [keyword]);
  // State for search query and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    price: [0, 250], // Price range filter
    rating: 0, // Rating filter
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Set initial page number and total pages

  // Handle changes to filters (e.g., price, rating, categories)
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setSearchQuery(generateSearchQuery(newFilters)); // Update searchQuery based on filters
  };

  // Generate search query from the filters
  const generateSearchQuery = (filters) => {
    const { categories, price, rating } = filters;
    let query = "";

    if (categories.length) {
      query += `categories: ${categories.join(", ")}`;
    }

    if (price) {
      query += ` price: ${price[0]} - ${price[1]}`;
    }

    if (rating) {
      query += ` rating: ${rating}`;
    }

    return query || "All"; // If no filters, return 'All'
  };

  // Pagination change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Implement pagination logic: e.g., fetch data for the selected page
    console.log("Moving to page:", page);
    // Set total pages if needed based on fetched data
  };

  return (
    <div>
      {/* Header to display searchQuery */}
      <Header searchQuery={searchQuery} />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar to select filters */}
        <Sidebar onFilterChange={handleFilterChange} />

        {/* Product Grid to display filtered products */}
        <ProductGrid
          filters={filters}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          products={results}
        />
      </div>

      {/* Footer */}
      <Footersignup />
    </div>
  );
}

export default SearchPage;
