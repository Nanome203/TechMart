import React, { useState } from "react";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Hàm chuyển trang
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page); // Gọi callback khi đổi trang
    }
  };

  // Tạo danh sách các trang hiển thị
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Hiển thị tất cả trang nếu số trang <= 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logic hiển thị khi tổng số trang > 5
      if (currentPage === 1) {
        // Khi ở trang 1, hiển thị 3 trang đầu tiên và dấu "..."
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage <= 3) {
        // Khi ở trang <= 3, hiển thị các trang đầu tiên và dấu "..."
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Khi ở gần cuối, hiển thị dấu "..." và các trang cuối
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Khi ở giữa, hiển thị dấu "..." ở hai bên
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Ẩn nút Previous khi ở trang 1 */}
      {currentPage > 1 && (
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="px-3 py-1 rounded-full border text-blue-500 border-blue-500"
        >
          &lt;
        </button>
      )}

      {/* Các số trang */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && goToPage(page)}
          className={`px-3 py-1 rounded-full ${
            currentPage === page
              ? "bg-white text-blue-500 border border-blue-500"
              : "bg-white text-gray-700 border border-gray-300"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Nút Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        className={`px-3 py-1 rounded-full border ${
          currentPage === totalPages
            ? "hidden"
            : "text-blue-500 border-blue-500"
        }`}
        disabled={currentPage === totalPages}
      > 
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
