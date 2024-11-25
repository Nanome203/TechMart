import ProductTag from "../atoms/ProductTag";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductDetails() {
  const responsive = {
    ultraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1500 },
      items: 8,
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
    <div className="w-screen px-2 py-5">
      <section className="mx-3 mb-5 flex min-h-screen w-full gap-10 rounded-2xl bg-white p-5">
        {/* Images */}
        <div className="h-full basis-1/3">
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
              <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-black opacity-50">
                <div className="flex h-full w-full items-center justify-center text-2xl text-white">
                  +10
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="h-full basis-1/3">
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
        <div className="h-full basis-1/3"></div>
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
