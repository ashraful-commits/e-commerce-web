import React from "react";
import {
  FaCcVisa,
  FaGreaterThan,
  FaHome,
  FaLocationArrow,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div className="container min-h-screen w-full">
      <div className="row w-full relative h-5">
        <div className="text-white top-0  fixed z-[999999999] bg-gradient-to-r from-purple-400 to-purple-900  px-4 py-2 flex items-center">
          <Link
            to={"/"}
            className="text-white flex items-center gap-1 text-sm capitalize"
          >
            <FaHome /> Home
          </Link>

          <FaGreaterThan className="text-sm mx-1" />

          <Link
            to={"/wishlist"}
            className="flex items-center text-white text-sm capitalize"
          >
            wishlist
          </Link>
        </div>
      </div>
      <div className="row mb-[1px] bg-purple-500 ">
        <div className="grid grid-cols-1 mt-5  py-2 pr-5 pl-2">
          <div className=" col-span-2  flex justify-center items-center">
            <h1 className="text-white text-xl lg:text-2xl md:text-lg font-bold">
              WishList
            </h1>
          </div>
        </div>
      </div>
      <div className="row bCart bCart-b-purple-500 bg-white">
        <div className="wishlist">
          <ul>
            <li className="border-b border-b-purple-500 w-full">
              <div className="grid grid-cols-4  py-2 px-2 w-full">
                <div className="img col-span-2 flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
                  <div className="img flex justify-start  items-center">1</div>
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-purple-500 font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>
                <div className="price flex flex-col justify-center items-center">
                  <span className="text-xs md:text-md lg:text-lg text-gray-500">
                    $222
                  </span>
                </div>
                <div className="price flex justify-end items-center">
                  <button className="p-2  bg-purple-500 text-white hover:bg-purple-800">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500 w-full">
              <div className="grid grid-cols-4  py-2 px-2 w-full">
                <div className="img col-span-2 flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
                  <div className="img flex justify-start  items-center">1</div>
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-purple-500 font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>
                <div className="price flex flex-col justify-center items-center">
                  <span className="text-xs md:text-md lg:text-lg text-gray-500">
                    $222
                  </span>
                </div>
                <div className="price flex justify-end items-center">
                  <button className="p-2  bg-purple-500 text-white hover:bg-purple-800">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500 w-full">
              <div className="grid grid-cols-4  py-2 px-2 w-full">
                <div className="img col-span-2 flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
                  <div className="img flex justify-start  items-center">1</div>
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-purple-500 font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>
                <div className="price flex flex-col justify-center items-center">
                  <span className="text-xs md:text-md lg:text-lg text-gray-500">
                    $222
                  </span>
                </div>
                <div className="price flex justify-end items-center">
                  <button className="p-2  bg-purple-500 text-white hover:bg-purple-800">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500 w-full">
              <div className="grid grid-cols-4  py-2 px-2 w-full">
                <div className="img col-span-2 flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
                  <div className="img flex justify-start  items-center">1</div>
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-purple-500 font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>
                <div className="price flex flex-col justify-center items-center">
                  <span className="text-xs md:text-md lg:text-lg text-gray-500">
                    $222
                  </span>
                </div>
                <div className="price flex justify-end items-center">
                  <button className="p-2  bg-purple-500 text-white hover:bg-purple-800">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500 w-full">
              <div className="grid grid-cols-4  py-2 px-2 w-full">
                <div className="img col-span-2 flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
                  <div className="img flex justify-start  items-center">1</div>
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-purple-500 font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>
                <div className="price flex flex-col justify-center items-center">
                  <span className="text-xs md:text-md lg:text-lg text-gray-500">
                    $222
                  </span>
                </div>
                <div className="price flex justify-end items-center">
                  <button className="p-2  bg-purple-500 text-white hover:bg-purple-800">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WishList;
