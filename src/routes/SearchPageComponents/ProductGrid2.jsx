import React from "react";
import Pagination from "../../atoms/Pagination";
import ProductTag from "../../atoms/ProductTag";

const ProductGrid = ({
  products,
  loading,
  error,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!products.length) return <div>No products found.</div>;

  return (
    <div className="w-3/4 p-4">
      <div className="mb-5">
        <span>
          Showing {(currentPage - 1) * 20 + 1}-
          {Math.min(currentPage * 20, products.length)} of {products.length}{" "}
          results
        </span>
      </div>

      <div className="grid grid-cols-4 gap-x-28 gap-y-3">
        {products.map((product) => (
          <ProductTag
            key={`${product.product_id}_${Math.random()}`}
            image={product.image || ""}
            name={product.descript}
            stars="4.5"
            discountedPrice={product.price}
            originalPrice={product.price * 1.2}
            id={product.product_id}
            weight={product.weight_g}
            length={product.length_cm}
            height={product.height_cm}
            width={product.width_cm}
          />
        ))}
      </div>

      <div className="flex justify-center p-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
