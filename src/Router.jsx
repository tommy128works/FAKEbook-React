import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      //   children: [
      //   { index: true, element: <HomePage /> },
      //   { path: "shop/:category", element: <ShopPage /> },
      //   { path: "shopping-cart", element: <ShoppingCart /> },
      //   ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
