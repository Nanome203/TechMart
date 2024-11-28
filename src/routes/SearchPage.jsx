import React, { useState } from 'react';
import Header from './SearchPageComponents/Header';
import Sidebar from './SearchPageComponents/Sidebar';
import ProductGrid from './SearchPageComponents/ProductGrid';
import Pagination from "../atoms/Pagination";

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
    <hr style={{ borderColor: 'black' }} />
    <div className='flex  flex-col items-center my-2'>
        <div className='font-bold text-xl'>See personalized recommendations</div>
        <a href='/signin' className='bg-[#FFAD33] text-white font-bold w-[152px] h-[24px] text-center rounded-2xl' >Sign in</a>
        <div>
          <a href='/login'>Don’t have an account? </a>
          <a href="/login" className='underline text-[#0071CE]'> Sign up.</a>
        </div>
    </div>
    </div>
  );
  
}

export default  SearchPage;
