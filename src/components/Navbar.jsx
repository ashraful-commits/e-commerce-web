import { useState, useEffect, useRef } from "react";
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

  // Use a ref to track the button and menu container
  const buttonRef = useRef(null);
  const menuContainerRef = useRef(null);

  // Add a click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target)
      ) {
        // Click occurred outside of the button and menu, so close the menu
        setIsOpen(false);
      }
    };

    // Attach the event listener when the menu is open
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        ref={buttonRef}
        className={`bg-primary  hover:bg-secondary text-white font-semibold rounded-full w-14 h-14 flex items-center justify-center transition-transform transform ${
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
            isOpen ? "bolck" : "hidden"
          } left-0 w-10 h-10 z-[-1] bg-secondary rounded-full rounded-tl-none`}
        ></span>
      </button>

      {isOpen && (
        <div
          ref={menuContainerRef}
          className="mt-1 z-[-1] space-y-1 h-[85vh] flex justify-between flex-col bg-background-light bottom-16 right-1 absolute p-1 rounded-md shadow-lg"
        >
          <NavItem label="Home" icon={FaHome} color="#FF5733" />
          <NavItem label="Shop" icon={FaShoppingCart} color="#FFC300" />
          <NavItem label="Product Listings" icon={FaTags} color="#FF5733" />
          <NavItem label="Product Detail" icon={FaThumbsUp} color="#FFC300" />
          <NavItem
            label="Shopping Cart"
            icon={FaShoppingCart}
            color="#FF5733"
          />
          <NavItem label="Checkout" icon={FaCreditCard} color="#FFC300" />
          <NavItem
            label="Order Confirmation"
            icon={FaThumbsUp}
            color="#FF5733"
          />

          <NavItem label="User Account" icon={FaUserCircle} color="#FFC300" />
          <NavItem label="Wishlist" icon={FaHeart} color="#FF5733" />
          <NavItem label="Search Results" icon={FaSearch} color="#FFC300" />
          <NavItem label="Contact Us" icon={FaEnvelope} color="#FF5733" />
          <NavItem label="About Us" icon={FaInfoCircle} color="#FFC300" />
          <NavItem label="Blog" icon={FaNewspaper} color="#FF5733" />
          <NavItem label="FAQs" icon={FaQuestionCircle} color="#FF5733" />
          {/* <NavItem label="Returns and Refunds" icon={FaSyncAlt} color="#FFC300" />,
    <NavItem label="Shipping Information" icon={FaTruck} color="#FF5733" />,
    <NavItem label="Payment Methods" icon={FaCreditCard} color="#FFC300" />,
    <NavItem label="Reviews and Ratings" icon={FaThumbsUp} color="#FF5733" />,
    <NavItem label="User Dashboard" icon={FaUser} color="#FFC300" />,
    <NavItem label="Admin Dashboard" icon={FaCog} color="#FF5733" />,
    <NavItem label="Category Pages" icon={FaTags} color="#FFC300" />,
    <NavItem label="Promotions and Deals" icon={FaThumbsUp} color="#FF5733" />,
    <NavItem label="Customer Support" icon={FaHeadset} color="#FFC300" />,
    <NavItem label="Sitemap" icon={FaChartBar} color="#FF5733" />, */}
        </div>
      )}
    </div>
  );
};

const NavItem = ({ label, icon, color }) => {
  const Icon = icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group transition-transform transform translate-y-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="#"
        className="relative px-2 py-2 rounded-rounded-bl-none rounded-tl-none hover:bg-accent hover:text-text-dark transition-transform flex items-center space-x-1"
      >
        {icon && (
          <Icon
            className={`text-2xl ${
              isHovered ? "text-white" : `bg-${color}`
            } transition-transform transform ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        )}
        <span
          className={`text-sm  absolute whitespace-nowrap  right-10 text text-center opacity-0 ${
            isHovered ? "opacity-100" : ""
          } transition-opacity bg-accent text-white rounded-lg rounded-br-none rounded-tr-none py-[.63rem] px-2`}
        >
          {label}
        </span>
      </a>
    </div>
  );
};

export default CircularNav;
