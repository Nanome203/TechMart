import { Link } from "react-router-dom";
const categories = [
  "Events",
  "Kitchen Utensils",
  "Electronics",
  "Furniture",
  "Books",
  "Clothes",
  "Holiday Shop",
  "New & Trending",
  "Toys",
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[1001]">
      <div
        id="utilities"
        className="flex h-[80px] w-full justify-around bg-[#0071CE]"
      >
        <Link to="/">
          <div
            id="logo"
            className="flex h-full cursor-pointer items-center gap-2"
          >
            <img src="/src/assets/Logo.png" className="w-12 rounded-full" />
            <p className="font-[Oswald] text-3xl text-white">TechMart</p>
          </div>
        </Link>
        <div
          id="location"
          className="flex h-full cursor-pointer items-center gap-2 px-5"
        >
          <i className="fa-solid fa-location-crosshairs text-4xl text-white"></i>
          <div id="location-wrapper" className="text-white">
            <p>Deliver to</p>
            <p className="font-bold">Ho Chi Minh, Vietnam</p>
          </div>
        </div>
        <div
          id="search-bar"
          className="flex h-full w-1/3 items-center justify-center"
        >
          <input
            type="search"
            className="h-2/5 w-2/3 rounded-s-lg px-5 py-1 outline-none"
            placeholder="Search here"
          />
          <button className="h-2/5 w-10 rounded-e-lg bg-gray-300 hover:bg-gray-400 active:bg-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          id="reorder"
          className="flex h-full cursor-pointer items-center gap-2 px-5"
        >
          <i className="fa-regular fa-heart text-4xl text-white"></i>
          <div id="reorder-wrapper" className="text-white">
            <p>Want to</p>
            <p className="font-bold">Reorder item?</p>
          </div>
        </div>
        <div
          id="sign-in"
          className="flex h-full cursor-pointer items-center gap-2 px-5"
        >
          <i className="fa-regular fa-user text-4xl text-white"></i>

          <div id="sign-in-wrapper" className="text-white">
            <p>Welcome, need to</p>
            <p className="font-bold">Sign in?</p>
          </div>
        </div>
        <div
          id="cart"
          className="flex h-full cursor-pointer flex-col items-center justify-center px-5"
        >
          <i className="fa-solid fa-cart-shopping text-3xl text-white"></i>
          <p className="text-sm text-white">$300</p>
        </div>
      </div>

      <div
        id="categories"
        className="flex h-[50px] w-full items-center justify-center bg-gray-200"
      >
        <div className="flex h-full w-5 flex-1 cursor-pointer items-center justify-center hover:bg-gray-400">
          <i className="fa-solid fa-bars"></i>
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex h-full w-10 flex-1 cursor-pointer items-center justify-center border-l border-l-black hover:bg-gray-400"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
