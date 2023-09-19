import React, { useEffect, useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="container h-full">
      <div className="row bg-purple-100 relative flex justify-between items-center">
        <h1 className="text-purple-500 text-xl inline-block uppercase font-bold p-2">
          | Shop
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
              {/* ... Filter options ... */}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {products.map((product, index) => (
          <div
            key={index}
            className="col w-full h-full bg-white m-2 p-4 relative group overflow-hidden"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="w-full  h-full">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            {hoveredProduct === index && (
              <div className="product-details absolute w-full h-full top-0 left-0 bg-opacity-75 bg-gray-800 text-white p-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2 truncate">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-500 text-lg font-semibold">
                    ${product.price}
                  </span>
                  <button className="bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
