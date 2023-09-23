import React from "react";
import {
  FaCcVisa,
  FaGreaterThan,
  FaHome,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="container min-h-screen w-full">
      <div className="row bg-gradient-to-r from-[#3EDBF0] to-[#3EDBF0] w-full relative h-10">
        <div className="text-white   fixed z-[999999999] px-4 py-2 flex items-center">
          <Link
            to={"/"}
            className="text-white flex items-center gap-1 text-sm capitalize"
          >
            <FaHome /> Home
          </Link>

          <FaGreaterThan className="text-sm mx-1" />

          <Link
            to={"/order"}
            className="flex items-center text-white text-sm capitalize"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="row mb-[1px] bg-white">
        <div className="grid grid-cols-3 mt-5  py-2 pr-5 pl-2">
          <div className=" col-span-2">
            <h1 className="text-primary lg:text-xl md:text-lg font-bold">
              Order ID:223423423
            </h1>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex gap-x-5 flex-col md:flex-row lg:flex-row justify-start px-2">
            <p className="text-xs lg:text-md md:text-sm whitespace-nowrap">
              Order date:Feb 16,2023
            </p>
            <p className="text-xs text-primary font-semibold lg:text-md md:text-sm whitespace-nowrap">
              Estimated delivery: May, 2022
            </p>
          </div>
          <div className="flex gap-1 p-2 justify-center items-center">
            <button className="bg-secondary text-white hover:bg-primary px-2 text-xs md:text-md lg:text-lg py-1">
              Invoice
            </button>
            <button className="flex text-xs text-white hover:bg-secondary bg-primary px-2  md:text-md lg:text-lg py-1 whitespace-nowrap justify-center items-center gap-2">
              Track Order <FaLocationArrow />
            </button>
          </div>
        </div>
      </div>
      <div className="row border border-b-primary bg-white">
        <div className="orderlist">
          <ul>
            <li className="border-b border-b-primary">
              <div className="grid grid-cols-2 py-2 px-5">
                <div className="img flex gap-5">
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-primary font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>

                <div className="price flex flex-col items-end">
                  <p className="text-sm text-primary font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
            <li className="border-b border-b-primary">
              <div className="grid grid-cols-2 py-2 px-5">
                <div className="img flex gap-5">
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-primary font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>

                <div className="price flex flex-col items-end">
                  <p className="text-sm text-primary font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
            <li className="border-b border-b-primary">
              <div className="grid grid-cols-2 py-2 px-5">
                <div className="img flex gap-5">
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-primary font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>

                <div className="price flex flex-col items-end">
                  <p className="text-sm text-primary font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
            <li className="border-b border-b-primary">
              <div className="grid grid-cols-2 py-2 px-5">
                <div className="img flex gap-5">
                  <img
                    className="w-10 h-10"
                    src="https://cdn.dribbble.com/userupload/2546703/file/original-093a21f42faf66c681c77a344953d797.png?resize=400x0"
                    alt=""
                  />
                  <div className="datials">
                    <h1 className="text-md text-primary font-semibold">
                      MacBookPro13
                    </h1>
                    <p className="text-xs text-gray-500 md:text-sm lg:text-sm">
                      Space oray | 32gb | 1TB
                    </p>
                  </div>
                </div>

                <div className="price flex flex-col items-end">
                  <p className="text-sm text-primary font-semibold">
                    $2222.222
                  </p>
                  <span className="text-xs text-gray-500">Qty:1</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row bg-white grid grid-cols-4  p-2">
        <div>
          <h5 className="text-sm whitespace-nowrap flex justify-between lg:text-lg font-bold">
            Sub Total: <span className=" font-normal">$0000</span>
          </h5>
          <h5 className="text-sm whitespace-nowrap flex justify-between lg:text-lg font-bold">
            Shipping: <span className=" font-normal">$0000</span>
          </h5>
          <h5 className="text-sm whitespace-nowrap flex justify-between lg:text-lg font-bold">
            Sales Tax: <span className=" font-normal">$0000</span>
          </h5>
          <div className=" border-t-2 border-t-primary">
            <h1 className="text-sm text-primary whitespace-nowrap flex justify-between lg:text-lg font-bold">
              Total: <span className=" font-normal">$0000</span>
            </h1>
          </div>
        </div>
        <div className=" col-span-3"></div>
      </div>
      <div className="row py-5 border-t-2 border-t-primary bg-white flex px-4 justify-between">
        <div className="w-full">
          <p className="text-lg font-bold">Payment</p>
          <p className="flex text-sm items-center gap-1">
            visa **56 <FaCcVisa />
          </p>
        </div>
        <div className="w-full">
          <h5 className="font-bold text-lg">Delivery</h5>
          <p className="text-sm">Address</p>
          <p className="text-sm">847 Jewess Bridge Apt. 174 london, UK</p>
          <p className="text-sm">474-769-3919</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
