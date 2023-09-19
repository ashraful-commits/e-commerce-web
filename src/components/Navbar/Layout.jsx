import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div className="main_container relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
