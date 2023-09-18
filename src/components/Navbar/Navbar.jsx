import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";
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
    <div
      className={`fixed top-[40%]  ${
        isOpen ? "" : "animated_boxShadow rounded-full"
      } w-[2.9rem] h-[2.8rem] mx-[4px] shadow-2xl bg-white  s right-2`}
    >
      <motion.button
        ref={buttonRef}
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
        className={`bg-yellow-500  hover:bg-purple-900 m-auto mt-[2px] p-2 text-white rounded-full font-semibold  hover:text-white transition-transform flex justify-center items-center ${
          isOpen ? "rotate-45" : ""
        }`}
        onClick={toggleMenu}
      >
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={menuContainerRef2}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 z-[-1] space-y-1 h-[40vh] py-3 flex justify-between  flex-col bg-background-light top-[40px] right-0 absolute p-1  shadow-lg"
          >
            <ShopItem label="Home" icon={FaHome} iconColor="text-blue-600" />
            <ShopItem
              label="Shop"
              icon={FaShoppingCart}
              iconColor="text-blue-600"
            />
            <ShopItem
              label="Product Listings"
              icon={FaTags}
              iconColor="text-blue-600"
            />
            <ShopItem
              label="Product Detail"
              icon={FaThumbsUp}
              iconColor="text-blue-600"
            />

            <ShopItem
              label="Search Results"
              icon={FaSearch}
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
              iconColor="text-blue-600"
            />
            <ShopItem
              label="Blog"
              icon={FaNewspaper}
              iconColor="text-blue-600"
            />
            <ShopItem
              label="FAQs"
              icon={FaQuestionCircle}
              iconColor="text-blue-600"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={menuContainerRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-1 z-[-1] space-y-1 h-[22vh] flex justify-between py-3  flex-col bg-background-light bottom-[45px] right-0 absolute p-1  shadow-sm"
          >
            <UserItem
              label="Shopping Cart"
              icon={FaShoppingCart}
              iconColor="text-blue-600"
            />
            <UserItem
              label="Checkout"
              icon={FaCreditCard}
              iconColor="text-blue-600"
            />
            <UserItem
              label="Order Confirmation"
              icon={FaThumbsUp}
              iconColor="text-blue-600"
            />
            <UserItem
              label="User Account"
              icon={FaUserCircle}
              iconColor="text-blue-600"
            />
            <UserItem
              label="Wishlist"
              icon={FaHeart}
              iconColor="text-blue-600"
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
    <div className="relative group transition-transform transform translate-y-0 my-4">
      <a
        href="#"
        className={`group relative shadow-sm px-2 py-1 rounded-rounded-bl-none rounded-tl-none   border-l-2 border-white group-hover:bg-yellow-500 group-hover:border-l-yellow-600 transition-transform flex items-center space-x-1 ${iconColor}`}
      >
        <motion.i
          className={`text-xl text-purple-500 group-hover:text-white transition-transform transform scale-100`}
        >
          <Icon />
        </motion.i>
        <span
          className={`text-sm group-hover:animate-bounce group-hover:border-r-2 border-r-purple-600 absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-9 text text-center text-purple-500 transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none py-[.2rem] px-2`}
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
        className={`group  relative shadow-sm px-2 py-1 rounded-rounded-bl-none rounded-tl-none  hover:${iconColor} border-l-2   delay-100 duration-200 hover:bg-yellow-500 w-full h-full border-white group-hover:border-l-yellow-500  transition-transform flex items-center space-x-1 ${iconColor}`}
      >
        <motion.i
          className={`text-xl text-purple-500 group-hover:text-white  transition-transform transform scale-100`}
        >
          <Icon />
        </motion.i>
        <span
          className={`text-sm group-hover:animate-bounce group-hover:border-r-2 group-hover:border-r-purple-600 absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-9 text-purple-500 text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none py-[.2rem] px-2`}
        >
          {label}
        </span>
      </a>
    </div>
  );
};

export default CircularNav;
