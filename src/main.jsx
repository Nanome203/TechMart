import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./routes/ProductDetailsPage.jsx";
import ProfilePage from "./routes/Profile/index.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Payment from "./routes/Payment.jsx";
import SearchPage from "./routes/SearchPage.jsx";
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
        path: "/products/:id",
        // loader: detailsLoader,
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
        path: "/test",
        element: <TestPage />,
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
