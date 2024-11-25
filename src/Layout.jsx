import { Outlet } from "react-router-dom";
import Header from "./atoms/Header";
import Footer from "./atoms/Footer";

function Layout() {
  return (
    <div className="flex min-h-screen w-screen flex-col justify-between bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
