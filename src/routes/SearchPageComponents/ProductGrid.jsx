import React, { useState } from 'react';
import ProductCard from '../../atoms/ProductCard';
import Pagination from '../../atoms/Pagination';

// Số lượng sản phẩm trên mỗi trang
const PRODUCTS_PER_PAGE = 20;

// Data sản phẩm giả lập
const products = Array.from({ length: 500 }).map((_, index) => ({
  id: index + 1,
  name: ``,
  description: "",
  price: ``,
  oldPrice: ``,
  image: "",
}));

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán chỉ số bắt đầu và kết thúc cho mỗi trang
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  // Lọc sản phẩm để hiển thị chỉ những sản phẩm trên trang hiện tại
  const productsToShow = products.slice(startIndex, endIndex);

  // Tổng số trang dựa trên số lượng sản phẩm
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-3/4 p-4">
      {/* Phần hiển thị thông tin số lượng sản phẩm */}
      <div className='mb-5'>
        <span className='text-xl font-sm me-1'>Show</span>
        <span className='text-xl font-semibold me-1'>
          {startIndex + 1}-{Math.min(endIndex, products.length)} {/* Hiển thị số sản phẩm trên trang */}
        </span>
        <span className='text-xl font-sm me-1'>
          of over {products.length} results {/* Tổng số sản phẩm */}
        </span>
      </div>

      {/* Lưới sản phẩm */}
      <div className="grid grid-cols-5 gap-3">
        {productsToShow.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Phân trang */}
      <div className="p-10 flex justify-center">
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductGrid;
