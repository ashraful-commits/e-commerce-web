import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss"; // Import your CSS/SCSS styles here

// Import necessary icons from react-icons/fa
import {
  FaShoppingCart,
  FaEnvelope,
  FaHome,
  FaHeart,
  FaSearch,
  FaCreditCard,
  FaUserCircle,
  FaInfoCircle,
  FaNewspaper,
  FaQuestionCircle,
  FaThumbsUp,
  FaTags,
  FaShoppingBag,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component for routing

// Define the Navbar component
const Navbar = () => {
  // State to control whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Refs for DOM elements to handle clicks outside the menu
  const buttonRef = useRef(null);
  const menuContainerRef = useRef(null);
  const menuContainerRef2 = useRef(null);

  // Effect to add and remove event listener for clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuContainerRef.current &&
        menuContainerRef2.current &&
        !menuContainerRef.current.contains(event.target) &&
        !menuContainerRef2.current.contains(event.target)
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
      {/* Menu button */}
      <div
        className={`fixed top-[44%] z-[9999999]  ${
          isOpen ? "" : "animated_boxShadow rounded-full"
        } w-[2.9rem] h-[2.8rem] mx-[4px] shadow-2xl bg-white  s right-[5px]`}
      >
        <motion.button
          ref={buttonRef}
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          className={`bg-[#3EDBF0]  hover:bg-secondary m-auto mt-[2px] p-2 text-white rounded-full font-semibold  hover:text-white transition-transform flex justify-center items-center ${
            isOpen ? "rotate-45" : ""
          }`}
          onClick={toggleMenu}
        >
          {/* Menu icon */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white -rotate-45 h-6 w-6"
              fill="white"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
            </svg>
          )}
        </motion.button>

        {/* First menu container */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              ref={menuContainerRef2}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 z-[-1] space-y-1 h-[35vh] py-0 flex justify-between flex-col-reverse  bg-background-light bottom-[44px] right-0 absolute p-1  shadow-lg"
            >
              {/* Menu items */}
              <ShopItem
                label="Home"
                url="/"
                icon={FaHome}
                iconColor="text-blue-600"
              />

              <ShopItem
                label="Product Listings"
                icon={FaTags}
                url="product"
                iconColor="text-blue-600"
              />
              <ShopItem
                label="Product Detail"
                icon={FaThumbsUp}
                url="/:slug"
                iconColor="text-blue-600"
              />

              <ShopItem
                label="Search Results"
                icon={FaSearch}
                url="search"
                iconColor="text-blue-600"
              />
              <ShopItem
                label="Contact Us"
                icon={FaEnvelope}
                iconColor="text-blue-600"
              />
              <ShopItem
                label="About Us"
                icon={FaInfoCircle}
                url="about"
                iconColor="text-blue-600"
              />
              <ShopItem
                label="Blog"
                icon={FaNewspaper}
                url="blog"
                iconColor="text-blue-600"
              />
              <ShopItem
                label="FAQs"
                url="faq"
                icon={FaQuestionCircle}
                iconColor="text-blue-600"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Second menu container */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              ref={menuContainerRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-1 z-[-1] space-y-1 h-[5vh] flex justify-between py-3  flex-col bg-background-light top-[40px] right-0 absolute p-1  shadow-sm"
            >
              {/* User menu item */}
              <UserItem
                label="User Account"
                icon={FaUserCircle}
                url="user"
                iconColor="text-blue-600"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom navigation icons */}
      <div>
        {/* Shop icon */}
        <div className="fixed bottom-[40%] z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
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

        {/* Wishlist icon */}
        <div className="fixed bottom-[16%] z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center 0 rounded-full">
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

        {/* Cart icon */}
        <div className="fixed bottom-[22%] z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center  rounded-full">
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

        {/* Checkout icon */}
        <div className="fixed bottom-[28%] z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center rounded-full">
          <Link
            className="w-10 rounded-full h-10 p-1 flex hover:bg-secondary bg-[#3EDBF0]  justify-center items-center"
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

        {/* Order icon */}
        <div className="fixed bottom-[34%] z-[999999] right-[9px] p-[2px] bg-white shadow-lg group flex justify-center items-center 0 rounded-full">
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
      </div>
    </>
  );
};

// ShopItem component to represent menu items
const ShopItem = ({ label, icon, iconColor, url }) => {
  const Icon = icon;

  return (
    <div className="relative group transition-transform transform translate-y-0 my-4">
      <Link
        to={url}
        className={`group relative shadow-sm px-2 py-1 rounded-rounded-bl-none rounded-tl-none   border-l-2 border-white group-hover:bg-secondary group-hover:border-l-[#3EDBF0] transition-transform flex items-center space-x-1 ${iconColor}`}
      >
        <motion.i
          className={`text-xl text-[#3EDBF0] group-hover:text-white transition-transform transform scale-100`}
        >
          <Icon />
        </motion.i>
        <span
          className={`text-sm group-hover:animate-bounce group-hover:border-r-2 border-r-[#3EDBF0] absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-9 text text-center text-[#3EDBF0] transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none py-[.2rem] px-2`}
        >
          {label}
        </span>
      </Link>
    </div>
  );
};

// UserItem component to represent user-related menu items
const UserItem = ({ label, icon, iconColor, url }) => {
  const Icon = icon;

  return (
    <div className="relative group transition-transform transform translate-y-0">
      <Link
        to={url}
        className={`group  relative shadow-sm px-2 py-1 rounded-rounded-bl-none rounded-tl-none  hover:${iconColor} border-l-2   delay-100 duration-200 hover:bg-secondary w-full h-full border-white group-hover:border-l-[#3EDBF0]  transition-transform flex items-center space-x-1 ${iconColor}`}
      >
        <motion.i
          className={`text-xl text-[#3EDBF0] group-hover:text-white  transition-transform transform scale-100`}
        >
          <Icon />
        </motion.i>
        <span
          className={`text-sm group-hover:animate-bounce group-hover:border-r-2 group-hover:border-r-[#3EDBF0] absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-9 text-[#3EDBF0] text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none py-[.2rem] px-2`}
        >
          {label}
        </span>
      </Link>
    </div>
  );
};

export default Navbar; // Export the Navbar component as the default export
