import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar/Navbar.scss";
import {
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaHome,
  FaHeart,
  FaSearch,
  FaCreditCard,
  FaUserCircle,
  FaInfoCircle,
  FaNewspaper,
  FaQuestionCircle,
  FaSyncAlt,
  FaLock,
  FaTruck,
  FaThumbsUp,
  FaCog,
  FaChartBar,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

const CircularNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonRef = useRef(null);
  const menuContainerRef = useRef(null);
  const menuContainerRef2 = useRef(null);

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
    <div className="fixed top-[40%] right-3">
      <motion.button
        ref={buttonRef}
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
        className={`bg-accent ${
          isOpen ? "" : "animated_boxShadow"
        } group hover:bg-secondary text-white font-semibold rounded-full w-12 h-12 flex items-center justify-center transition-transform ${
          isOpen ? "rotate-45" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        <span
          className={`absolute top-0 ${
            isOpen ? "block" : "hidden"
          } left-0 w-full h-full flex justify-between items-center shadow-md z-[-1] bg-accent group-hover:bg-secondary rounded-none`}
        >
          <FaUser className="absolute -rotate-45 p-[2px] text-xs top-0 left-0" />
          <FaShoppingCart className="absolute bottom-0 -rotate-45 text-xs p-[2px] right-0" />
        </span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={menuContainerRef2}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 z-[-1] space-y-1 h-[50vh] flex justify-between  flex-col bg-background-light top-[50px] right-0 absolute p-1 rounded-md shadow-lg"
          >
            <ShopItem label="Home" icon={FaHome} iconColor="text-red-500" />
            <ShopItem
              label="Shop"
              icon={FaShoppingCart}
              iconColor="text-yellow-500"
            />
            <ShopItem
              label="Product Listings"
              icon={FaTags}
              iconColor="text-green-500"
            />
            <ShopItem
              label="Product Detail"
              icon={FaThumbsUp}
              iconColor="text-blue-500"
            />

            <ShopItem
              label="Search Results"
              icon={FaSearch}
              iconColor="text-cyan-500"
            />
            <ShopItem
              label="Contact Us"
              icon={FaEnvelope}
              iconColor="text-gray-500"
            />
            <ShopItem
              label="About Us"
              icon={FaInfoCircle}
              iconColor="text-red-600"
            />
            <ShopItem
              label="Blog"
              icon={FaNewspaper}
              iconColor="text-yellow-600"
            />
            <ShopItem
              label="FAQs"
              icon={FaQuestionCircle}
              iconColor="text-green-600"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={menuContainerRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 z-[-1] space-y-1 h-[35vh] flex justify-between  flex-col bg-background-light bottom-14 right-0 absolute p-1 rounded-md shadow-lg"
          >
            <UserItem
              label="Shopping Cart"
              icon={FaShoppingCart}
              iconColor="text-purple-500"
            />
            <UserItem
              label="Checkout"
              icon={FaCreditCard}
              iconColor="text-pink-500"
            />
            <UserItem
              label="Order Confirmation"
              icon={FaThumbsUp}
              iconColor="text-indigo-500"
            />
            <UserItem
              label="User Account"
              icon={FaUserCircle}
              iconColor="text-teal-500"
            />
            <UserItem
              label="Wishlist"
              icon={FaHeart}
              iconColor="text-orange-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ShopItem = ({ label, icon, iconColor }) => {
  const Icon = icon;

  return (
    <div className="relative group transition-transform transform translate-y-0">
      <a
        href="#"
        className={`group relative shadow-sm px-2 py-2 rounded-rounded-bl-none rounded-tl-none hover:bg-white hover:${iconColor} border-l-2 border-white group-hover:border-l-orange-600 transition-transform flex items-center space-x-1 ${iconColor}`}
      >
        <motion.i
          className={`text-2xl  transition-transform transform scale-100`}
        >
          <Icon />
        </motion.i>
        <span
          className={`text-sm group-hover:animate-bounce group-hover:border-r-2 border-r-orange-600 absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-10 text text-center transition-opacity bg-white ${iconColor} rounded-lg rounded-br-none rounded-tr-none py-[.63rem] px-2`}
        >
          {label}
        </span>
      </a>
    </div>
  );
};
const UserItem = ({ label, icon, iconColor }) => {
  const Icon = icon;

  return (
    <div className="relative group transition-transform transform translate-y-0">
      <a
        href="#"
        className={`group relative shadow-sm px-2 py-2 rounded-rounded-bl-none rounded-tl-none hover:bg-white hover:${iconColor} border-l-2 border-white group-hover:border-l-orange-600 transition-transform flex items-center space-x-1 ${iconColor}`}
      >
        <motion.i
          className={`text-2xl  transition-transform transform scale-100`}
        >
          <Icon />
        </motion.i>
        <span
          className={`text-sm group-hover:animate-bounce group-hover:border-r-2 border-r-orange-600 absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-10 text text-center transition-opacity bg-white ${iconColor} rounded-lg rounded-br-none rounded-tr-none py-[.63rem] px-2`}
        >
          {label}
        </span>
      </a>
    </div>
  );
};

export default CircularNav;
