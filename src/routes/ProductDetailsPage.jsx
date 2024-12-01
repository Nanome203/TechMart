import ProductTag from "../atoms/ProductTag";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Stars from "../atoms/Stars";
import Review from "../atoms/Review";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Spinner from "../atoms/Spinner";
import { CartContext } from "../Context/CartContext";

export default function ProductDetails() {
  const location = useLocation();
  const { id, name, image, discountedPrice, originalPrice, height } =
    location.state;
  const { cart, addToCart } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setRelatedProducts(null);
    setProductDetails(null);
    // Gọi API để lấy sản phẩm liên quan
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/related-items/${id}`);
        setRelatedProducts(response.data.related_items);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    // Gọi API để lấy chi tiết sản phẩm
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://martech-backend.onrender.com/api/product-description/${id}`,
        );
        setProductDetails(response.data.product_description); // Cập nhật chi tiết sản phẩm vào state
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchRelatedProducts();
    fetchProductDetail();
  }, [id]);

  const responsive = {
    ultraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2600, min: 1800 },
      items: 6,
      slidesToSlide: 7,
    },
    superLargeDesktop: {
      breakpoint: { max: 1800, min: 1600 },
      items: 5,
      slidesToSlide: 5,
    },
    largeDesktop: {
      breakpoint: { max: 1600, min: 1250 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1250, min: 800 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="w-full">
      <section className="mb-5 flex w-full gap-20 rounded-2xl bg-white p-5">
        {/* Images */}
        <div className="basis-1/3">
          <div className="relative w-full">
            <img
              src={image}
              alt="sofa"
              className="mb-3 aspect-square w-full rounded-3xl border-2 border-gray-300 object-contain p-5"
            />
            <div className="absolute -right-5 top-1/2 size-10 cursor-pointer rounded-full border-2 border-black transition-all">
              <div className="flex size-full items-center justify-center">
                <i className="fa-solid fa-angle-right text-2xl"></i>
              </div>
            </div>
            <div className="absolute right-5 top-3">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="size-12 cursor-pointer rounded-full border-[1px] border-gray-600 bg-white shadow-2xl transition-all">
                  <div className="flex size-full items-center justify-center">
                    <i className="fa-solid fa-share-nodes text-2xl"></i>
                  </div>
                </div>
                <div className="size-12 cursor-pointer rounded-full border-[1px] border-gray-600 bg-white shadow-2xl transition-all">
                  <div className="flex size-full items-center justify-center">
                    <i className="fa-regular fa-heart text-2xl"></i>
                  </div>
                </div>
                <div className="size-12 cursor-pointer rounded-full border-[1px] border-gray-600 bg-white shadow-2xl transition-all">
                  <div className="flex size-full items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass-plus text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-5">
            <img
              src={image}
              alt="sofa"
              className="aspect-square w-20 rounded-3xl border-2 border-[#0071CE] object-contain"
            />
            <img
              src={image}
              alt="sofa"
              className="aspect-square w-20 rounded-3xl border-2 border-gray-300 object-contain"
            />
            <img
              src={image}
              alt="sofa"
              className="aspect-square w-20 rounded-3xl border-2 border-gray-300 object-contain"
            />
            <img
              src={image}
              alt="sofa"
              className="aspect-square w-20 rounded-3xl border-2 border-gray-300 object-contain"
            />
            <div className="relative">
              <img
                src={image}
                alt="sofa"
                className="aspect-square w-20 rounded-3xl border-2 border-gray-300 object-contain"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-black bg-opacity-50">
                <div className="flex h-full w-full items-center justify-center text-2xl text-white">
                  +10
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="basis-1/3">
          <div className="w-full">
            <h1 className="line-clamp-3 text-2xl">{name}</h1>
            <div>
              5.0 <Stars /> (259 ratings)
            </div>
            <hr className="my-5 border-y-2" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl">About this product</h1>
            {name ? (
              <>
                <ul className="w-full list-inside list-disc">
                  <li>{name}</li>
                </ul>

                <u className="cursor-pointer font-bold hover:text-red-500">
                  View more
                </u>
              </>
            ) : (
              <Spinner size="text-4xl" />
            )}

            <hr className="my-5 border-y-2" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl">Chi tiết</h1>
            {productDetails ? (
              <p className="list-inside list-disc">{productDetails}</p>
            ) : (
              <Spinner size="text-4xl" />
            )}

            <hr className="my-5 border-y-2" />
          </div>
        </div>

        {/* Buy button */}
        <div className="basis-1/3">
          <div className="mx-auto h-full w-11/12 rounded-xl bg-[#E5E5E5] bg-opacity-50 p-5">
            <section>
              <h1 className="text-3xl font-bold text-[#008500]">
                Now ${discountedPrice}
                <sup className="text-lg font-normal text-gray-500">
                  <s>${originalPrice}</s>{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </sup>
              </h1>
              <div className="flex h-10 w-full items-center gap-2">
                <div className="flex items-center justify-center bg-[#008500] bg-opacity-25 px-5 py-1 text-[#008500]">
                  <span>You save</span>
                </div>
                <div className="font-bold text-[#008500]">$82.00</div>
              </div>
              <div>
                As low as <b>$6.05/month</b> or <b>0%</b> with{" "}
                <b>TechMart Premium+</b>
              </div>
              <div className="flex h-12 w-full items-center gap-5">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-truck-fast"></i>
                  <span>Free shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-rotate-left"></i>
                  <span>Free 90-day return policy</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex w-full flex-col items-center gap-2">
                <button
                  onClick={() => {
                    console.log("Adding to cart:", {
                      id,
                      name,
                      price: discountedPrice,
                      image,
                    });
                    addToCart({ id, name, price: discountedPrice, image });
                    console.log("Cart after adding:", cart);
                  }}
                  className="h-14 w-10/12 rounded-full border-2 border-[#1173BE] text-xl font-bold text-[#1173BE] hover:bg-[#1173BE] hover:text-white active:bg-blue-500"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    console.log("Adding to cart:", {
                      id,
                      name,
                      price: discountedPrice,
                      image,
                    });
                    addToCart({ id, name, price: discountedPrice, image });
                    console.log("Cart after adding:", cart);
                  }}
                  className="hover: h-14 w-10/12 rounded-full bg-red-500 text-xl font-bold text-white hover:bg-red-600 active:bg-red-700"
                >
                  <Link to="/cart">Buy now</Link>
                </button>
              </div>
              <hr className="my-5 border-black opacity-40" />
            </section>
            <section>
              <h1 className="text-3xl font-semibold">
                Warranty Option{" "}
                <sup className="cursor-pointer text-sm font-normal underline">
                  What&apos;s covered
                </sup>
              </h1>
              <div>(Only one option can be selected only)</div>
              <div className="mx-auto my-3 flex h-48 w-11/12 flex-col items-center justify-center gap-2 rounded-3xl bg-[#1173BE] bg-opacity-20 text-2xl">
                <div>
                  <input type="radio" name="warranty" /> 1-year warranty plan -
                  $08.00
                </div>
                <div>
                  <input type="radio" name="warranty" /> 2-year warranty plan -
                  $14.00
                </div>
                <div>
                  <input type="radio" name="warranty" /> 3-year warranty plan -
                  $17.00
                </div>
              </div>
              <hr className="my-5 border-black opacity-40" />
            </section>
            <section>
              <h1 className="text-3xl font-bold">How do you want your item?</h1>
              <div className="my-5 flex w-full gap-2">
                <div className="flex h-80 w-full basis-1/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#1173BE] bg-opacity-20 px-5">
                  <i className="fa-solid fa-bolt-lightning text-5xl"></i>
                  <h1 className="text-lg font-bold">Fast delivery</h1>
                  <p className="h-24 text-center">
                    TechMart Premium+ Free charge for fast delivery.
                  </p>
                </div>
                <div className="flex h-80 w-full basis-1/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#1173BE] bg-opacity-20 px-5">
                  <i className="fa-solid fa-truck text-5xl"></i>
                  <h1 className="text-lg font-bold">Shipping</h1>
                  <p className="h-24 text-center">
                    Casual delivery. Take 2 - 4 days to deliver.
                  </p>
                </div>
                <div className="flex h-80 w-full basis-1/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#1173BE] bg-opacity-20 px-5">
                  <i className="fa-solid fa-car text-5xl"></i>
                  <h1 className="text-lg font-bold">Pick up</h1>
                  <p className="h-24 text-center">Go to the techMart store</p>
                </div>
              </div>
              <div className="text-lg">
                Deliver to{" "}
                <span className="font-bold underline">
                  Ho Chi Minh, Vietnam
                </span>
              </div>
              <hr className="my-5 border-black opacity-40" />
            </section>
            <section>
              <div className="text-lg">
                Sold and shipped by TechMart. <u>See details</u>.
              </div>
              <div className="my-3 flex w-full">
                <div className="flex basis-1/2 items-center justify-center gap-2">
                  <i className="fa-regular fa-heart text-2xl"></i>
                  <div>Add to Wishlist</div>
                </div>
                <div className="flex basis-1/2 items-center justify-center gap-2">
                  <i className="fa-solid fa-gift text-2xl"></i>
                  <div>Add to Wishlist</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <h1 className="ml-3 text-3xl font-bold">
          Related items you may be interested
        </h1>
        {relatedProducts === null ? (
          <div className="h-96 w-full">
            <Spinner size="text-6xl" />
          </div>
        ) : (
          <Carousel responsive={responsive}>
            {relatedProducts.map((product) => (
              <ProductTag
                key={product.product_id}
                discountPercentage={50}
                image={product.image}
                name={product.descript}
                stars={5}
                discountedPrice={parseFloat(product.price).toFixed(2)}
                originalPrice={200}
                id={product.product_id}
              />
            ))}
          </Carousel>
        )}
      </section>
      <section className="mx-3 rounded-xl bg-white pb-5">
        <h1 className="p-5 text-3xl font-bold">Customer ratings & reviews</h1>
        <div className="flex w-full">
          <div className="flex basis-2/5 flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-bold">5 out of 5</h1>
            <div className="flex">
              <div className="px-5">
                <Stars className={"text-2xl"} />
              </div>
              <div className="border-l-2 border-gray-300 px-5 text-xl italic">
                259 ratings
              </div>
              <div className="border-l-2 border-gray-300 px-5 text-xl italic">
                98 reviews
              </div>
            </div>
            <div className="text-xl font-bold">
              How item rating is calculated{" "}
              <i className="fa-solid fa-circle-info px-3"></i>
            </div>
            <button className="mb-5 rounded-full border-2 border-black px-5 py-3 text-xl font-bold hover:bg-black hover:text-white active:bg-transparent active:text-black">
              View all reviews
            </button>
          </div>
          <div className="flex basis-3/5 items-center justify-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div>
                  5 <i className="fa-solid fa-star text-[#FCAC00]"></i>
                </div>
                <div className="h-6 w-[500px] rounded-full bg-[#1173BE]"></div>
                <div>100% (259 ratings)</div>
              </div>
              <div className="flex gap-2">
                <div>
                  4 <i className="fa-solid fa-star text-[#FCAC00]"></i>
                </div>
                <div className="h-6 w-[500px] rounded-full bg-[#D9D9D9]"></div>
                <div>0% (0 ratings)</div>
              </div>
              <div className="flex gap-2">
                <div>
                  3 <i className="fa-solid fa-star text-[#FCAC00]"></i>
                </div>
                <div className="h-6 w-[500px] rounded-full bg-[#D9D9D9]"></div>
                <div>0% (0 ratings)</div>
              </div>
              <div className="flex gap-2">
                <div>
                  2 <i className="fa-solid fa-star text-[#FCAC00]"></i>
                </div>
                <div className="h-6 w-[500px] rounded-full bg-[#D9D9D9]"></div>
                <div>0% (0 ratings)</div>
              </div>
              <div className="flex gap-2">
                <div>
                  1 <i className="fa-solid fa-star text-[#FCAC00]"></i>
                </div>
                <div className="h-6 w-[500px] rounded-full bg-[#D9D9D9]"></div>
                <div>0% (0 ratings)</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="p-5 text-xl font-bold">Showing 1-3 of 98 reviews</h1>
        <Review />
        <Review />
        <Review />
        <button className="mx-auto mt-5 block rounded-full border-2 border-black px-5 py-3 text-xl font-bold hover:bg-black hover:text-white active:bg-transparent active:text-black">
          View more reviews
        </button>
      </section>
      <section className="mx-3 mt-5 rounded-xl bg-white p-5">
        <h1 className="text-3xl font-bold">Related product keyword</h1>
        <div className="my-5 rounded-full bg-[#D9D9D9] px-5 py-3">
          Product not satisfied?{" "}
          <u className="cursor-pointer">Report product</u>
        </div>
        <div className="flex border-b-2 border-gray-300 pb-5">
          <div className="basis-1/4 text-lg underline">
            <p>Beautiful bed</p>
            <p>Comfortable bed</p>
            <p>Royal bed</p>
            <p>Modern bed</p>
            <p>Bed with drawer</p>
            <p>Bed with comfortable mattress and pillows</p>
          </div>
          <div className="basis-1/4 text-lg underline">
            <p>Cheap quality bed</p>
            <p>Bed for life and comfort</p>
            <p>Combo set of bed</p>
            <p>Bed with LED</p>
            <p>Beautiful bed design</p>
            <p>City bed</p>
          </div>
          <div className="basis-1/4 text-lg underline">
            <p>Beautiful bed</p>
            <p>Comfortable bed</p>
            <p>Royal bed</p>
            <p>Modern bed</p>
            <p>Bed with drawer</p>
            <p>Bed with comfortable mattress and pillows</p>
          </div>
          <div className="basis-1/4 text-lg underline">
            <p>Cheap quality bed</p>
            <p>Bed for life and comfort</p>
            <p>Combo set of bed</p>
            <p>Bed with LED</p>
            <p>Beautiful bed design</p>
            <p>City bed</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 pt-5">
          <div className="text-xl font-bold">
            See personalized recommendations
          </div>
          <button className="mx-auto block w-56 rounded-full bg-[#FFAD33] text-lg font-bold text-white hover:bg-opacity-60 active:bg-[#FFAD33]">
            Sign In
          </button>
          <div>
            Don&apos;t have an account?{" "}
            <a href="#" className="text-[#0000AA] underline hover:text-red-500">
              Sign up
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
