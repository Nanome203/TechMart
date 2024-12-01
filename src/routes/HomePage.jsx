import ProductTag from "../atoms/ProductTag";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const data = [
  { image: "/src/assets/homepage/thanksevent.png", text: "Event" },
  { image: "/src/assets/homepage/Electronics.png", text: "Electronics" },
  { image: "/src/assets/homepage/Furniture.png", text: "Furniture" },
  { image: "/src/assets/homepage/Houseware.png", text: "Houseware" },
  { image: "/src/assets/homepage/Food.png", text: "Food" },
  { image: "/src/assets/homepage/Kitchen.png", text: "Kitchen" },
  { image: "/src/assets/homepage/Clothes.png", text: "Clothes" },
  { image: "/src/assets/homepage/Toys.png", text: "Toys" },
  { image: "/src/assets/homepage/Games.png", text: "Games" },
  { image: "/src/assets/homepage/Books.png", text: "Books" },
];

export default function Home() {
  const responsive = {
    ultraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
      slidesToSlide: 7,
    },
    superLargeDesktop: {
      breakpoint: { max: 1500, min: 1150 },
      items: 4,
      slidesToSlide: 5,
    },
    largeDesktop: {
      breakpoint: { max: 1150, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
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

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/searchpage"); // Điều hướng đến trang chi tiết sản phẩm
  };

  // const handleProductClick = (productId) => {
  //   navigate(`/products/${productId}`); // Điều hướng đến trang chi tiết sản phẩm
  // };

  const [products, setProducts] = useState([]); // Create state to save product list

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(API_BASE_URL);
        const response = await axios.get(
          `${API_BASE_URL}/recommendations/hCT0x9JiGXBQ`,
        );
        // const response = await axios.get("https://martech-backend.onrender.com/api/recommendations/hCT0x9JiGXBQ");
        console.log(response.data.recommendations); // Check
        setProducts(response.data.recommendations); // Save product list to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <body className="flex flex-col items-center">
      <div className="w-[1320px]">
        <div className="mb-7 mt-7 flex h-28 w-full flex-row items-center justify-between rounded-xl bg-[#E8BC0E] p-7">
          <div>
            <p className="font-[Oswald] text-4xl">TechMart Premium</p>
          </div>
          <div>
            <p className="text-xl">
              Get
              <span className="font-bold">TechMart Premium+</span>
              to save up to 50% when shopping
            </p>
          </div>
          <div>
            <p className="text-center text-sm">
              Deals end in <br />
              <span className="font-bold">7 days 23 : 59 : 59</span>
            </p>
          </div>
          <div>
            <button className="h-12 w-32 rounded-xl bg-white hover:border-white hover:bg-black hover:text-white">
              Join Now!
            </button>
          </div>
        </div>

        <div className="flex h-[870px] w-full flex-row justify-between">
          {/* Column 1 */}
          <div className="flex h-full w-[302px] flex-col justify-between">
            {/* Item 1 */}
            <div className="h-72 w-full rounded-lg bg-[url('/src/assets/homepage/sofa.png')] bg-cover bg-center pl-7 pt-4 shadow-lg">
              <div>
                <p className="text-shadow text-2xl font-bold">
                  Bring comfort to living <br /> room
                </p>
              </div>
              <div>
                <button
                  className="mt-3 h-[30px] w-[98px] rounded-lg border border-black bg-white hover:border-white hover:bg-black hover:text-white"
                  onClick={handleBuyNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div className="h-[516px] w-full rounded-lg bg-[url('/src/assets/homepage/coat.png')] bg-cover bg-center pl-7 pt-4 shadow-lg">
              <div>
                <p className="text-shadow text-2xl font-bold">
                  Keep yourself warm <br /> through winter
                </p>
              </div>
              <div>
                <button
                  className="mt-3 h-[30px] w-[98px] rounded-lg border border-black bg-white hover:border-white hover:bg-black hover:text-white"
                  onClick={handleBuyNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex h-full w-[633px] flex-col justify-between">
            {/* Item 1 */}
            <div className="h-[500px] w-full rounded-lg bg-[url('/src/assets/homepage/turkey.png')] bg-cover bg-center pl-7 pt-4 shadow-lg">
              <div>
                <p className="text-shadow text-sm font-bold text-white">
                  Food, decoration & more!
                </p>
              </div>
              <div>
                <p className="text-shadow text-3xl font-bold text-white">
                  Bring your family together through <br /> Thanksgiving Day
                </p>
              </div>
              <div>
                <button
                  className="mt-3 h-[30px] w-[98px] rounded-lg border border-black bg-white hover:border-white hover:bg-black hover:text-white"
                  onClick={handleBuyNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div className="h-[329px] w-full rounded-lg bg-[url('/src/assets/homepage/candal.png')] bg-cover bg-center pl-7 pt-4 shadow-lg">
              <div>
                <p className="text-shadow-lg text-2xl font-bold text-white">
                  Your Christmas decoration for Winter <br /> Holiday
                </p>
              </div>
              <div>
                <button
                  className="mt-3 h-[30px] w-[98px] rounded-lg border border-black bg-white hover:border-white hover:bg-black hover:text-white"
                  onClick={handleBuyNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex h-full w-[302px] flex-col justify-between">
            {/* Item 1 */}
            <div className="h-72 w-full rounded-lg bg-[url('/src/assets/homepage/headphone.png')] bg-cover bg-center pl-7 pt-4 shadow-lg">
              <div>
                <p className="text-shadow text-2xl font-bold text-white">
                  Enjoy your moment with <br /> music behind
                </p>
              </div>
              <div>
                <button
                  className="mt-3 h-[30px] w-[98px] rounded-lg border border-black bg-white hover:border-white hover:bg-black hover:text-white"
                  onClick={handleBuyNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div className="h-[516px] w-full rounded-lg bg-[url('/src/assets/homepage/spoon.png')] bg-cover bg-center pl-7 pt-4 shadow-lg">
              <div>
                <p className="text-shadow-lg text-2xl font-bold text-white">
                  Improves your kitchen <br /> with our products
                </p>
              </div>
              <div>
                <button
                  className="mt-3 h-[30px] w-[98px] rounded-lg border border-black bg-white hover:border-white hover:bg-black hover:text-white"
                  onClick={handleBuyNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1368px]">
        <hr className="border-t-1 mb-7 mt-7 border-gray-400" />

        <div className="flex h-[474px] flex-col justify-between">
          <p className="text-3xl font-bold">Sales For You</p>
          <div className="h-[400px] w-full">
            <Carousel responsive={responsive}>
              {products?.length > 0 ? (
                products.map((product) => (
                  <ProductTag
                    key={`${product.product_id}_${Math.random()}`}
                    id={product.product_id}
                    discountPercentage={50}
                    image={product.image}
                    name={product.descript}
                    stars={5}
                    discountedPrice={product.price}
                    originalPrice={product.price * 2}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Carousel>
          </div>
        </div>

        <hr className="border-t-1 mb-7 mt-7 border-gray-400" />

        {/* Categories  */}
        <div className="flex h-[175px] flex-col items-center justify-between">
          {/* Title Section */}
          <p className="text-left text-3xl font-bold">
            Other Categories you can find
          </p>

          {/* Categories Section */}
          <div className="flex h-28 w-[1295px] flex-row justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex h-full w-28 cursor-pointer flex-col items-center justify-between hover:shadow-lg"
              >
                {/* Category Image */}
                <div
                  className="h-[74px] w-[76px] rounded-full border border-gray-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Category Text */}
                <div className="flex h-8 w-28 flex-col items-center justify-center">
                  <p className="text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t-1 mb-7 mt-7 border-gray-400" />

        <div className="mb-7 flex flex-row items-center justify-center">
          <div className="flex h-[68px] w-[548px] flex-col items-center justify-between">
            {/* Recommendation Title */}
            <p className="text-xl font-bold">
              See personalized recommendations
            </p>

            {/* Sign In Button */}
            <button className="h-6 w-36 rounded-2xl bg-[#FFAD33] text-sm font-bold text-white">
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-sm">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-500 underline">
                Sign up
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
