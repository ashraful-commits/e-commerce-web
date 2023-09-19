import Layout from "../components/Navbar/Layout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Order from "../pages/Order";
import Product from "../pages/Product";
import Search from "../pages/Search";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import User from "../pages/User";
import Wishlist from "../pages/Wishlist";

const PrivateRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
];
export default PrivateRoutes;
