import ProductTag from "../atoms/ProductTag";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductDetails() {
  const responsive = {
    ultraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1500 },
      items: 6,
      slidesToSlide: 7,
    },
    superLargeDesktop: {
      breakpoint: { max: 1500, min: 1150 },
      items: 5,
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
    <div className="w-screen">
      <section className="mx-3 mb-5 flex w-full gap-10 rounded-2xl bg-white p-5">
        {/* Images */}
        <div className="basis-1/3">
          <div className="relative w-full">
            <img
              src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
              alt="sofa"
              className="mb-3 w-full rounded-3xl border-2 border-gray-300 object-contain"
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
              src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
              alt="sofa"
              className="w-20 rounded-3xl border-8 border-[#0071CE] object-contain"
            />
            <img
              src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
              alt="sofa"
              className="w-20 rounded-3xl object-contain"
            />
            <img
              src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
              alt="sofa"
              className="w-20 rounded-3xl object-contain"
            />
            <img
              src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
              alt="sofa"
              className="w-20 rounded-3xl object-contain"
            />
            <img
              src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
              alt="sofa"
              className="w-20 rounded-3xl object-contain"
            />
            <div className="relative">
              <img
                src="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
                alt="sofa"
                className="w-20 rounded-3xl object-contain"
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
            <h1 className="line-clamp-3 text-2xl">
              City Scene - Queen Comforter Set, Smooth & Soft Bedding with
              Matching Shams, Modern Home Decor (Courtney White, Queen)
            </h1>
            <div>
              4.5 <i className="fa-solid fa-star text-[#FCAC00]"></i>
              <i className="fa-solid fa-star text-[#FCAC00]"></i>
              <i className="fa-solid fa-star text-[#FCAC00]"></i>
              <i className="fa-solid fa-star text-[#FCAC00]"></i>
              <i className="fa-solid fa-star text-[#FCAC00]"></i> (259 ratings)
            </div>
            <hr className="my-5 border-y-2" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl">About this product</h1>
            <ul className="w-full list-inside list-disc">
              <li>
                MATERIAL: 100% Microfiber Constructed Home Decor- with a soft
                and cozy feel
              </li>
              <li>
                INCLUDES: (1) Queen Comforter, (2) Standard Shams. Comforter
                will fit full size mattress also.
              </li>
              <li>
                FEATURES: Lofty polyester fill for extra warmth, without the
                weight. Knife edge finish for tailored look. Sham features side
                European closure. Modern decor that&apos;s perfect for
                year-round use
              </li>
              <li>
                DIMENSIONS: Queen Comforter (96&quot;L x 92&quot;W) and Two
                Standard shams (21&quot;L x 27&quot;W)
              </li>
              <li>CARE: Machine washable for easy care</li>
            </ul>
            <u className="cursor-pointer font-bold hover:text-red-500">
              View more
            </u>
            <hr className="my-5 border-y-2" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl">Options</h1>
            <ul className="list-inside list-disc">
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
              <li>Unavailable</li>
            </ul>
            <hr className="my-5 border-y-2" />
          </div>
        </div>

        {/* Buy button */}
        <div className="basis-1/3">
          <div className="h-full w-11/12 rounded-xl bg-[#E5E5E5] p-5">
            <section>
              <h1 className="text-3xl font-bold text-[#008500]">
                Now $67.99{" "}
                <sup className="text-lg font-normal text-gray-500">
                  <s>$149.99</s> <i className="fa-solid fa-circle-info"></i>
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
              <div className="flex w-full flex-col items-center gap-2">
                <button className="h-14 w-10/12 rounded-full border-2 border-[#1173BE] text-xl font-bold text-[#1173BE] hover:bg-[#1173BE] hover:text-white active:bg-blue-500">
                  Add to Cart
                </button>
                <button className="hover: h-14 w-10/12 rounded-full bg-red-500 text-xl font-bold text-white hover:bg-red-600 active:bg-red-700">
                  Buy now
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
                  <h1 className="text-xl font-bold">Fast delivery</h1>
                  <p className="h-20 text-center">
                    TechMart Premium+ Free charge for fast delivery. Take up to
                    2 days
                  </p>
                </div>
                <div className="flex h-80 w-full basis-1/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#1173BE] bg-opacity-20 px-5">
                  <i className="fa-solid fa-truck text-5xl"></i>
                  <h1 className="text-xl font-bold">Shipping</h1>
                  <p className="h-20 text-center">
                    Casual delivery. Take 2 - 4 days to deliver.
                  </p>
                </div>
                <div className="flex h-80 w-full basis-1/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#1173BE] bg-opacity-20 px-5">
                  <i className="fa-solid fa-car text-5xl"></i>
                  <h1 className="text-xl font-bold">Pick up</h1>
                  <p className="h-20 text-center">Go to the techMart store</p>
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
          </div>
        </div>
      </section>
      <section>
        <h1 className="ml-3 text-2xl font-bold">
          Related items you may be interested
        </h1>
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
      </section>
    </div>
  );
}
