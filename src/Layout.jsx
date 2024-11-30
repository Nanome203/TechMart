import { Outlet, useLocation } from "react-router-dom";
import Header from "./atoms/Header";
import Footer from "./atoms/Footer";
import { useEffect } from "react";

function Layout() {
  const location = useLocation(); // Access the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#f5f5f5]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
