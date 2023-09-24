import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss"; // Import your CSS/SCSS styles here
import {
  FaShoppingCart,
  FaEnvelope,
  FaHome,
  FaHeart,
  FaSearch,
  FaCreditCard,
  FaInfoCircle,
  FaNewspaper,
  FaQuestionCircle,
  FaThumbsUp,
  FaShoppingBag,
  FaGreaterThan,
  FaLessThan,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
        className={`fixed ${
          isOpen ? "right-12 bg-secondary" : "right-0"
        } top-[46%] ref={buttonRef} border-2 border-white shadow-xl z-[9999999999] bg-primary cursor-pointer flex justify-center items-center w-6 h-14 right-0`}
      >
        {isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="w-full flex justify-center items-center h-full"
          >
            <FaGreaterThan className="text-white text-xs" />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex justify-center items-center h-full"
          >
            <FaLessThan className="text-white  text-xs" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              delay: 0.2,
              duration: 0.3,
            }}
            className={`fixed z-[99999999999] ${
              isOpen ? " right-0" : " -right-24"
            } top-[15%] flex bg-white border-l-2 border-l-purple-500 px-1 py-2 rounded-full flex-col gap-3`}
            ref={menuContainerRef}
          >
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/search"
              >
                <FaSearch className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Search
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/blog"
              >
                <FaNewspaper className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Blog
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/faq"
              >
                <FaQuestionCircle className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Faq
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/about"
              >
                <FaInfoCircle className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                About
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/contact"
              >
                <FaEnvelope className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Contact
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/"
              >
                <FaHome className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Shop
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/shop"
              >
                <FaShoppingBag className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Shop
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center 0 rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/wishlist"
              >
                <FaHeart className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={` px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                WishList
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/cart"
              >
                <FaShoppingCart className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Cart [10]
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/checkout"
              >
                <FaCreditCard className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={` px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                Checkout
              </label>
            </div>
            <div className=" z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center 0 rounded-full">
              <Link
                className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0] justify-center items-center"
                to="/order"
              >
                <FaThumbsUp className="text-white transition-all delay-100  duration-500 " />
              </Link>
              <label
                className={`px-2 py-1 text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-12 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none `}
                htmlFor=""
              >
                order
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
