import React from 'react';
import ProductCard from '../../atoms/ProductCard';

const products = [
  // Mock dữ liệu sản phẩm
  {
    id: 1,
    name: 'Modern Sofa',
    description: 'Comfortable sofa with two pillows',
    price: '89.99',
    oldPrice: '140.00',
    image: 'https://via.placeholder.com/150',
  },
  // Thêm nhiều sản phẩm hơn
];

const ProductGrid = () => {
  return (
    <div className="w-3/4 p-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
