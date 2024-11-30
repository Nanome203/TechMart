import React, { useState } from 'react';
import Header from './SearchPageComponents/Header';
import Sidebar from './SearchPageComponents/Sidebar';
import ProductGrid from './SearchPageComponents/ProductGrid';
import Footersignup from "../atoms/Footersignup";

function SearchPage() {
  // State cho searchQuery và các bộ lọc
  const [searchQuery, setSearchQuery] = useState(''); // Thay đổi searchQuery theo kết quả tìm kiếm
  const [filters, setFilters] = useState({
    categories: []
  });

  // Xử lý thay đổi filter
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Cập nhật searchQuery dựa trên các bộ lọc đã chọn
    setSearchQuery(generateSearchQuery(newFilters));
  };

  // Tạo searchQuery từ các bộ lọc
  const generateSearchQuery = (filters) => {
    const { categories, price, rating } = filters;
    let query = '';
    if (categories.length) {
      query += `${categories.join(', ')}`;
    }
    return query || 'All'; // Nếu không có filter nào, trả về "All"
  };
  const totalPages = 25;

  const handlePageChange = (page) => {
    console.log("Chuyển đến trang:", page);
    // Thực hiện các logic khác, ví dụ: gọi API để lấy dữ liệu trang mới
  };

  return (
    <div>
      {/* Truyền searchQuery vào Header */}
      <Header searchQuery={searchQuery} />

      {/* Sidebar và ProductGrid */}
      <div className="flex">
        <Sidebar onFilterChange={handleFilterChange} />
        <ProductGrid filters={filters} />
      </div>
     <Footersignup/>
    </div>
  );
  
}

export default  SearchPage;
