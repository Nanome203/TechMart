import { Outlet } from "react-router-dom";
import Header from "./atoms/Header";
import Footer from "./atoms/Footer";

function Layout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#f5f5f5]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
