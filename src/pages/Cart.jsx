import React from "react";
import {
  FaCcVisa,
  FaGreaterThan,
  FaHome,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
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
            to={"/Cart"}
            className="flex items-center text-white text-sm capitalize"
          >
            Cart
          </Link>
        </div>
      </div>
      <div className="row mb-[1px] bg-purple-500 ">
        <div className="grid grid-cols-1 mt-5  py-2 pr-5 pl-2">
          <div className=" col-span-2  flex justify-center items-center">
            <h1 className="text-white text-xl lg:text-2xl md:text-lg font-bold">
              Cart
            </h1>
          </div>
        </div>
      </div>
      <div className="row bCart bCart-b-purple-500 bg-white">
        <div className="Cartlist">
          <ul>
            <li className="border-b border-b-purple-500">
              <div className="grid grid-cols-4 py-2 px-2">
                <div className="img flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
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
                <div className="price flex gap-1  justify-center items-center ">
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    +
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    1
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    -
                  </span>
                </div>
                <div className="price flex flex-col items-end">
                  <p className="text-sm text-purple-500 font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500">
              <div className="grid grid-cols-4 py-2 px-2">
                <div className="img flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
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
                <div className="price flex gap-1  justify-center items-center ">
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    +
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    1
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    -
                  </span>
                </div>
                <div className="price flex flex-col items-end">
                  <p className="text-sm text-purple-500 font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500">
              <div className="grid grid-cols-4 py-2 px-2">
                <div className="img flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
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
                <div className="price flex gap-1  justify-center items-center ">
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    +
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    1
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    -
                  </span>
                </div>
                <div className="price flex flex-col items-end">
                  <p className="text-sm text-purple-500 font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
            <li className="border-b border-b-purple-500">
              <div className="grid grid-cols-4 py-2 px-2">
                <div className="img flex flex-col md:flex-row lg:flex-row gap-x-3 gap-y-2">
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
                <div className="price flex gap-1  justify-center items-center ">
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    +
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    1
                  </span>
                  <span className="border w-10 flex justify-center border-purple-500 items-center">
                    -
                  </span>
                </div>
                <div className="price flex flex-col items-end">
                  <p className="text-sm text-purple-500 font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row bg-white grid grid-cols-4 w-full p-2">
        <div className="w-full h-full">
          <h5 className="text-sm whitespace-nowrap flex justify-between lg:text-lg font-bold">
            Sub Total: <span className=" font-normal">$0000</span>
          </h5>
          <h5 className="text-sm whitespace-nowrap flex justify-between lg:text-lg font-bold">
            Shipping: <span className=" font-normal">$0000</span>
          </h5>
          <h5 className="text-sm whitespace-nowrap flex justify-between lg:text-lg font-bold">
            Sales Tax: <span className=" font-normal">$0000</span>
          </h5>
          <div className=" border-t-2 border-t-purple-500 w-full">
            <h1 className="text-purple-500 font-bold">
              Total:<span className=" font-normal text-gray-500">$0000</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="row py-5 border-t-2 border-t-purple-500 bg-white flex px-4 justify-between">
        <div className="w-full"></div>
        <div className="w-full flex flex-col  justify-center items-end">
          <h5 className="font-bold  text-md my-2">Shipping</h5>
          <Link to={"/checkout"} className="bg-purple-500 px-4 py-1 text-white">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
