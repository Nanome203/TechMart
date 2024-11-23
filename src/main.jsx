import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./routes/ProductDetailsPage.jsx";
import ProfilePage from "./routes/Profile/index.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerConfig} />
  </StrictMode>,
);
