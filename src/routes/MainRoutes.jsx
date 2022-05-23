import AdminPages from "../pages/AdminPages";
import EditProductPage from "../pages/EditProductPage";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Cart from "../components/Cart/Cart";

import AuthPage from "../pages/AuthPage";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentPage from "../pages/PaymentPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

import AboutUs from "../components/AboutUs/AboutUs";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/products",
      element: <ProductsPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 4,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 5,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 6,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 7,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 9,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/adminPage",
      element: <AdminPages />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
