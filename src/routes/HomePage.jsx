import ProductTag from "../atoms/ProductTag";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const data = [
  { image: '/src/assets/homepage/thanksevent.png', text: 'Event' },
  { image: '/src/assets/homepage/Electronics.png', text: 'Electronics' },
  { image: '/src/assets/homepage/Furniture.png', text: 'Furniture' },
  { image: '/src/assets/homepage/Houseware.png', text: 'Houseware' },
  { image: '/src/assets/homepage/Food.png', text: 'Food' },
  { image: '/src/assets/homepage/Kitchen.png', text: 'Kitchen' },
  { image: '/src/assets/homepage/Clothes.png', text: 'Clothes' },
  { image: '/src/assets/homepage/Toys.png', text: 'Toys' },
  { image: '/src/assets/homepage/Games.png', text: 'Games' },
  { image: '/src/assets/homepage/Books.png', text: 'Books' },
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
  return (
    <body className="flex flex-col items-center">
      <div className="w-[1320px]">
        <div 
          className="flex flex-row 
          items-center justify-between 
          bg-[#E8BC0E] w-full h-28 mt-7 mb-7 rounded-xl p-7"
        >
          <div><p className="text-4xl font-[Oswald]">TechMart Premium</p></div>
          <div>
            <p className="text-xl">
              Get 
              <span className="font-bold">TechMart Premium+</span> 
              to save up to 50% when shopping
            </p>
          </div>
          <div>
            <p className="text-sm text-center">
              Deals end in <br />
              <span className="font-bold">7 days 23 : 59 : 59</span> 
            </p>
          </div>
          <div>
            <button className="bg-white w-32 h-12 rounded-xl 
             hover:bg-black hover:text-white hover:border-white">Join Now!</button>
          </div>
        </div>

        <div className="flex flex-row w-full h-[870px] justify-between">
          {/* Column 1 */}
          <div className="flex flex-col w-[302px] justify-between h-full">
            {/* Item 1 */}
            <div
              className="w-full h-72 bg-[url('/src/assets/homepage/sofa.png')] 
              bg-cover bg-center rounded-lg shadow-lg pl-7 pt-4"
            >
              <div>
                <p className="text-2xl font-bold text-shadow">
                  Bring comfort to living <br /> room
                </p>
              </div>
              <div>
                <button
                  className="bg-white border border-black rounded-lg w-[98px] h-[30px] mt-3
                   hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div
              className="w-full h-[516px] bg-[url('/src/assets/homepage/coat.png')] 
              bg-cover bg-center rounded-lg shadow-lg pl-7 pt-4"
            >
              <div>
                <p className="text-2xl font-bold text-shadow">
                  Keep yourself warm <br /> through winter
                </p>
              </div>
              <div>
                <button
                  className="bg-white border border-black rounded-lg w-[98px] h-[30px] mt-3 
                   hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col w-[633px] h-full justify-between">
            {/* Item 1 */}
            <div
              className="w-full h-[500px] bg-[url('/src/assets/homepage/turkey.png')] 
              bg-cover bg-center shadow-lg rounded-lg pl-7 pt-4"
            >
              <div>
                <p className="text-sm font-bold text-white text-shadow">
                  Food, decoration & more!
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white text-shadow">
                  Bring your family together through <br /> Thanksgiving Day
                </p>
              </div>
              <div>
                <button
                  className="bg-white border border-black rounded-lg w-[98px] h-[30px] mt-3
                   hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div
              className="w-full h-[329px] bg-[url('/src/assets/homepage/candal.png')] 
              bg-cover bg-center shadow-lg rounded-lg pl-7 pt-4"
            >
              <div>
                <p className="text-2xl font-bold text-white text-shadow-lg">
                  Your Christmas decoration for Winter <br /> Holiday
                </p>
              </div>
              <div>
                <button
                  className="bg-white border border-black rounded-lg w-[98px] h-[30px] mt-3
                   hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col w-[302px] justify-between h-full">
            {/* Item 1 */}
            <div
              className="w-full h-72 bg-[url('/src/assets/homepage/headphone.png')] 
              bg-cover bg-center shadow-lg rounded-lg pl-7 pt-4"
            >
              <div>
                <p className="text-2xl font-bold text-white text-shadow">
                  Enjoy your moment with <br /> music behind
                </p>
              </div>
              <div>
                <button
                  className="bg-white border border-black rounded-lg w-[98px] h-[30px] mt-3
                   hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div
              className="w-full h-[516px] bg-[url('/src/assets/homepage/spoon.png')] 
              bg-cover bg-center shadow-lg rounded-lg pl-7 pt-4"
            >
              <div>
                <p className="text-2xl font-bold text-white text-shadow-lg">
                  Improves your kitchen <br /> with our products
                </p>
              </div>
              <div>
                <button
                  className="bg-white border border-black rounded-lg w-[98px] h-[30px] mt-3
                   hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-[1368px]">
        <hr className="border-t-1 border-gray-400 mt-7 mb-7" />

        <div className="h-[474px] flex flex-col justify-between">
          <p className="font-bold text-3xl">Electronics Deal</p>
          <div className="h-[400px] w-full">
          <Carousel responsive={responsive}>
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            </Carousel>
          </div>

        </div>

        <hr className="border-t-1 border-gray-400 mt-7 mb-7" />

        <div className="h-[474px] flex flex-col justify-between">
          <p className="font-bold text-3xl">Furniture For Sales</p>
          <div className="h-[400px] w-full">
          <Carousel responsive={responsive}>
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            </Carousel>
          </div>
        </div>

        <hr className="border-t-1 border-gray-400 mt-7 mb-7" />

        <div className="h-[474px] flex flex-col justify-between">
          <p className="font-bold text-3xl">Trending in Games & Accessories</p>
          <div className="h-[400px] w-full">
          <Carousel responsive={responsive}>
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            <ProductTag
                discountPercentage={50}
                image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
                stars={5}
                discountedPrice={100}
                originalPrice={200}
            />
            </Carousel>
          </div>
        </div>

        <hr className="border-t-1 border-gray-400 mt-7 mb-7" />

        {/* Categories  */}
        <div className="h-[175px] flex flex-col justify-between items-center">
          {/* Title Section */}
          <p className="font-bold text-3xl text-left">
            Other Categories you can find
          </p>

          {/* Categories Section */}
          <div className="h-28 w-[1295px] flex flex-row justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-28 h-full flex flex-col items-center justify-between cursor-pointer
                 hover:shadow-lg"
              >
                {/* Category Image */}
                <div
                  className="w-[76px] h-[74px] bg-cover bg-center rounded-full border border-gray-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Category Text */}
                <div className="flex flex-col items-center justify-center w-28 h-8">
                  <p className="text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <hr className="border-t-1 border-gray-400 mt-7 mb-7" />

        <div className="flex flex-row items-center justify-center mb-7">
          <div className="w-[548px] h-[68px] flex flex-col items-center justify-between">
            {/* Recommendation Title */}
            <p className="text-xl font-bold">
              See personalized recommendations
            </p>

            {/* Sign In Button */}
            <button className="w-36 h-6 bg-[#FFAD33] text-sm font-bold text-white rounded-2xl">
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-sm">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-500 underline">
                Sign up
              </a>.
            </p>
          </div>
        </div>

      </div>
    </body>
  );
}
  