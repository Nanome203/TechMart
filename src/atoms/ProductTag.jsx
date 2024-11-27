/* eslint-disable react/prop-types */
function ProductTag({
  name,
  image,
  stars,
  discountedPrice,
  originalPrice,
  discountPercentage,
}) {
  return (
    <div className="border-gray relative m-3 h-96 w-72 cursor-pointer rounded-xl border-2 bg-white p-5 hover:shadow-lg">
      <div className="absolute left-1 top-1 rounded-xl bg-red-600 px-2 py-1 text-center text-sm text-white">
        {discountPercentage}%
      </div>
      <button className="absolute right-1 top-1 h-10 w-10 rounded-full border-[1px] border-gray-600 bg-white">
        <i className="fa-regular fa-heart text-lg"></i>
      </button>
      <img src={image} className="mb-5 size-48 w-full object-contain" />
      <div className="mx-1 line-clamp-3 w-full font-bold active:text-red-500">
        {name}
      </div>
      <div className="mx-1 text-sm font-bold text-[#FCAC00]">
        <i className="fa-regular fa-star"></i> {parseFloat(stars).toFixed(1)}
      </div>
      <div className="mx-1 text-xl font-bold text-green-700">
        ${parseFloat(discountedPrice).toFixed(2)}
        <sup className="text-sm font-normal text-gray-400">
          {" "}
          <s>${parseFloat(originalPrice).toFixed(2)}</s>
        </sup>
      </div>
      <button className="mx-1 rounded-full border-[1px] border-gray-700 px-5 py-1 text-center font-semibold hover:bg-black hover:text-white">
        <i className="fa-solid fa-cart-shopping"></i> Add
      </button>
    </div>
  );
}

export default ProductTag;
