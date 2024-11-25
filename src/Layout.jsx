import { Outlet } from "react-router-dom";
import Header from "./atoms/Header";
import Footer from "./atoms/Footer";

function Layout() {
  return (
    <div className="flex h-screen min-h-screen w-screen flex-col justify-between bg-[#f5f5f5]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
