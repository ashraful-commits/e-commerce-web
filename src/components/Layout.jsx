import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div className="main_container relative w-full h-auto flex flex-col items-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
