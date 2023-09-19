import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
import { json } from "react-router-dom";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="container w-full h-full flex flex-col items-center ">
      <div className="row mb-5 w-full bg-purple-900 relative flex justify-between items-center">
        <h1 className="text-white text-xl inline-block uppercase font-bold p-2">
          |Shop|
        </h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="filter_menu fixed z-[9999] bg-purple-600 text-white hover:bg-yellow-500 rounded-full shadow-lg right-[14px] top-[2%]"
        >
          <button
            onClick={() => setFilter(!filter)}
            className="w-12 h-12 border-2 border-white rounded-full flex justify-center items-center"
          >
            <AiFillFilter />
          </button>
          {filter && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={filter ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute shadow-lg rounded-lg w-[250px] p-4 right-12 overflow-hidden bg-purple-600 top-0"
            >
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Search:
                </label>
                <input
                  type="search"
                  className="w-full border px-2 text-gray-600  rounded-lg py-1 focus:outline-none"
                  placeholder="Search product "
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Category:
                </label>
                <select
                  id="category"
                  className="w-full text-gray-600 border rounded-md py-2 px-3 focus:outline-none"
                >
                  <option className="text-gray-500 font-semibold" value="all">
                    All
                  </option>
                  <option
                    className="text-gray-500 font-semibold"
                    value="electronics"
                  >
                    Electronics
                  </option>
                  <option
                    className="text-gray-500 font-semibold"
                    value="clothing"
                  >
                    Clothing
                  </option>
                  <option
                    className="text-gray-500 font-semibold"
                    value="appliances"
                  >
                    Appliances
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="minPrice"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Min Price:
                </label>
                <input
                  type="number"
                  id="minPrice"
                  className="w-full text-gray-600 border rounded-md py-2 px-3 focus:outline-none"
                  placeholder="Min Price"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="maxPrice"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Max Price:
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  className="w-full text-gray-600 border rounded-md py-2 px-3 focus:outline-none"
                  placeholder="Max Price"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Brand:
                </label>
                <select
                  id="brand"
                  className="w-full border text-gray-600 rounded-md py-2 px-3 focus:outline-none"
                >
                  <option className="text-gray-500 font-semibold" value="all">
                    All
                  </option>
                  <option className="text-gray-500 font-semibold" value="apple">
                    Apple
                  </option>
                  <option
                    className="text-gray-500 font-semibold"
                    value="samsung"
                  >
                    Samsung
                  </option>
                  <option className="text-gray-500 font-semibold" value="nike">
                    Nike
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Tags:
                </label>
                <div>
                  <ul className="flex gap-2 flex-wrap">
                    <li className="border px-1 text-white rounded-md ">food</li>
                    <li className="border px-1 text-white rounded-md ">food</li>
                    <li className="border px-1 text-white rounded-md ">food</li>
                    <li className="border px-1 text-white rounded-md ">food</li>
                    <li className="border px-1 text-white rounded-md ">food</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="row w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 content-center ">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="col w-full h-full transition-all p-4 delay-100 duration-500 group bg-white relative group overflow-hidden"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-64 flex justify-center items-center">
              <motion.img
                src={product.image}
                alt=""
                className="object-contain rounded-lg transition-transform transform hover:scale-105 duration-300 w-full h-full"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            {hoveredProduct === index && (
              <motion.div
                onClick={() => setShow(!show)}
                className="product-details group-hover:transition-all group-hover:delay-100 group-hover:duration-500 absolute w-full h-full top-0 left-0 bg-purple-900 text-white p-4 flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                  <AiFillEye className="text-purple-600 text-2xl" />
                </button>
                {show && (
                  <Modal onClose={() => setShow(false)}>
                    <div className=" w-full h-full overflow-y-auto">
                      <div>
                        <img src={product.image} alt="" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h1 className="text-gray-700 mt-5 font-bold text-xl">
                          {product.title}
                        </h1>
                        <p className="text-sm text-bold text-gray-400">
                          {product.description}
                        </p>
                        <hr />
                        <h4 className="text-purple-600 font-bold">
                          Price:$ {product.price}
                        </h4>
                        <div className="flex justify-between items-center">
                          <button className="bg-purple-600 px-2 py-1 hover:bg-purple-900 rounded-md">
                            Add to cart
                          </button>
                          <button className="bg-purple-600 px-2 py-1 hover:bg-purple-900 rounded-md">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
