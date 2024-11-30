import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./routes/ProductDetailsPage.jsx";
import ProfilePage from "./routes/Profile/index.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Payment from "./routes/Payment.jsx";
<<<<<<< HEAD
import SearchPage from "./routes/SearchPage.jsx"; 
import Cart from "./routes/Cart.jsx"; 
=======
import SearchPage from "./routes/SearchPage.jsx";
>>>>>>> main
import HomePage from "./routes/HomePage.jsx";
import TestPage from "./routes/TestPage.jsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
<<<<<<< HEAD
        path: "/products",
=======
        path: "/products/:id",
        // loader: detailsLoader,
>>>>>>> main
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/searchpage",
        element: <SearchPage />,
      },
      {
<<<<<<< HEAD
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/test",
        element: <TestPage/>,
=======
        path: "/test",
        element: <TestPage />,
>>>>>>> main
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={routerConfig} />,
  // </StrictMode>,
);
