import { useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion"; // Import motion

const Shop = () => {
  const [filter, setFilter] = useState(false);
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

      <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {/* <!-- Grid layout with responsive columns --> */}
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        <div className="col p-4">
          {/* <!-- Individual column with padding --> */}
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full overflow-hidden"
          />
          {/* <!-- Responsive and adaptable image --> */}
        </div>
        {/* <!-- Repeat this block for additional columns --> */}
      </div>
    </div>
  );
};

export default Shop;
