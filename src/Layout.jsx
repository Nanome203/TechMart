import { Outlet } from "react-router-dom";

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
function Layout() {
  return (
    <div className="flex h-screen min-h-screen w-screen flex-col justify-between">
      <header>
        <div
          id="utilities"
          className="flex h-[80px] w-screen justify-around bg-[#0071CE]"
        >
          <div id="logo" className="flex h-full items-center gap-2 px-5">
            <img
              src="https://media.istockphoto.com/id/1412901513/vector/modern-hand-technology-logo-design.jpg?s=612x612&w=0&k=20&c=zZ4Kh-J2BV_oLfx8Tfd65aUFdTNlCvjmWxLOT4sEeVs="
              className="w-12 rounded-full"
            />
            <p className="font-[Oswald] text-3xl text-white">TechMart</p>
          </div>
          <div id="location" className="flex h-full items-center gap-2 px-5">
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
          <div id="reorder" className="flex h-full items-center gap-2 px-5">
            <i className="fa-regular fa-heart text-4xl text-white"></i>
            <div id="location-wrapper" className="text-white">
              <p>Want to</p>
              <p className="font-bold">Reorder item?</p>
            </div>
          </div>
          <div id="sign-in" className="flex h-full items-center gap-2 px-5">
            <i className="fa-regular fa-user text-4xl text-white"></i>

            <div id="location-wrapper" className="text-white">
              <p>Welcome, need to</p>
              <p className="font-bold">Sign in?</p>
            </div>
          </div>
          <div
            id="sign-in"
            className="flex h-full flex-col items-center justify-center px-5"
          >
            <i className="fa-solid fa-cart-shopping text-3xl text-white"></i>
            <p className="text-sm text-white">$300</p>
          </div>
        </div>

        <div
          id="categories"
          className="flex h-[50px] w-screen items-center justify-center bg-gray-200"
        >
          <div className="flex h-full w-5 flex-1 items-center justify-center">
            <i className="fa-solid fa-bars"></i>
          </div>
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex h-full w-10 flex-1 items-center justify-center border-l border-l-black"
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
      </header>
      <Outlet />
      <footer className="flex w-screen flex-col items-center bg-[#0071CE]">
        <div className="flex h-72 w-full items-center justify-center">
          <div className="flex w-1/2">
            <div
              id="about"
              className="flex w-1/4 flex-col items-center gap-3 text-white"
            >
              <b>ABOUT</b>
              <p>About Us</p>
              <p>Blog</p>
              <p>Contact Us</p>
              <p>Review</p>
            </div>
            <div
              id="privacy-services"
              className="flex w-1/4 flex-col items-center gap-3 text-white"
            >
              <b>PRIVACY AND SERVICES</b>
              <p>Privacy Policy</p>
              <p>Reviews</p>
              <p>Job Opinions</p>
              <p>Terms & Conditions</p>
            </div>
            <div
              id="shopping"
              className="flex w-1/4 flex-col items-center gap-3 text-white"
            >
              <b>SHOPPING</b>
              <p>Gift Cards</p>
              <p>FAQ</p>
              <p>Return Policy</p>
              <p>Online Catalogue</p>
              <p>Search</p>
            </div>
            <div
              id="account"
              className="flex w-1/4 flex-col items-center gap-3 text-white"
            >
              <b>ACCOUNT</b>
              <p>Log In</p>
              <p>Sign Up </p>
              <p>Delete Account</p>
              <p>Premium Package</p>
            </div>
          </div>
        </div>
        <div className="flex w-screen items-center justify-center gap-2 px-5">
          <img
            src="https://media.istockphoto.com/id/1412901513/vector/modern-hand-technology-logo-design.jpg?s=612x612&w=0&k=20&c=zZ4Kh-J2BV_oLfx8Tfd65aUFdTNlCvjmWxLOT4sEeVs="
            className="w-20 rounded-full"
          />
          <p className="font-[Oswald] text-5xl text-white">TechMart</p>
        </div>
        <p className="text-bold m-5 text-xl text-white">
          &copy;2024. All Right Reserved
        </p>
      </footer>
    </div>
  );
}

export default Layout;
