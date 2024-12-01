import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import SearchBar from "./SearchBar.jsx";
import { CartContext } from "../Context/CartContext.jsx";

const categories = [
  {
    name: "Fashion",
    link: "/category/cool_stuff",
  },
  {
    name: "Home & Kitchen",
    link: "/category/housewares",
  },
  {
    name: "Electronics",
    link: "/category/electronics",
  },
  {
    name: "Furniture",
    link: "/category/furniture_decor",
  },
  {
    name: "Technique Books",
    link: "/category/books_technical",
  },
  {
    name: "Perfume",
    link: "/category/perfumery",
  },
  {
    name: "Watches",
    link: "/category/watches_gifts",
  },
  {
    name: "Arts & Crafts",
    link: "/category/art",
  },
  {
    name: "Toys",
    link: "/category/toys",
  },
];

export default function Header() {
  const [isSignInVisible, setSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { totalPrice } = useContext(CartContext);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setSignInVisible(false);
    setIsSignUpVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const handleCloseSignin = () => {
    setSignInVisible(false);
  };

  return (
    <header className="sticky top-0 z-[1001] w-full">
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
        <SearchBar />
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
          {isLoggedIn ? (
            <div onClick={handleLogout} className="text-white">
              <p>Hello, User</p>
              <p className="rounded-xl border-[1px] border-white p-1 text-center font-bold">
                Log out
              </p>
            </div>
          ) : (
            <div
              onClick={() => setSignInVisible((prev) => !prev)}
              className="text-white"
            >
              <p>Welcome, need to</p>
              <p className="font-bold">Sign in?</p>
            </div>
          )}
        </div>
        <div
          id="cart"
          className="flex h-full cursor-pointer flex-col items-center justify-center px-5"
        >
          <Link to="/Cart">
            <i className="fa-solid fa-cart-shopping text-3xl text-white"></i>
          </Link>
          <Link to="/Cart" className="text-sm text-white">
            ${totalPrice.toFixed(2)}
          </Link>
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
          <Link
            to={category.link}
            key={index}
            className="flex h-full w-10 flex-1 cursor-pointer items-center justify-center border-l border-l-black hover:bg-gray-400"
          >
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
      <div
        className={`${
          !isSignInVisible && !isSignUpVisible && "hidden"
        } fixed left-0 top-0 flex h-screen w-screen cursor-pointer items-center justify-center bg-black bg-opacity-50`}
        onClick={handleCloseSignin}
      >
        <Login
          isVisible={isSignInVisible}
          onClose={handleCloseSignin}
          onLogin={handleLogin}
          switchToSignUp={() => {
            setIsSignUpVisible(true);
            setSignInVisible(false);
          }}
          handleLogin={handleLogin}
        />
        <Signup
          isVisible={isSignUpVisible}
          onClose={() => setIsSignUpVisible((prev) => !prev)}
          switchToLogIn={() => {
            setIsSignUpVisible(false);
            setSignInVisible(true);
          }}
          handleLogin={handleLogin}
        />
      </div>
    </header>
  );
}
