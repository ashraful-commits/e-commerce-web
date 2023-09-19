import { useState } from "react";
import { AiFillFilter } from "react-icons/ai";
const Shop = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div className="container h-full">
      <div className="row bg-purple-500 relative flex justify-between items-center">
        <h1 className="text-white text-xl inline-block uppercase font-bold p-2">
          | Shop
        </h1>
        <div className="filter_menu fixed z-[9999] bg-white rounded-full shadow-lg right-5 top-5">
          <button
            onClick={() => setFilter(!filter)}
            className="w-12 h-12 flex justify-center items-center"
          >
            <AiFillFilter />
          </button>
          {filter && (
            <div className="absolute shadow-lg rounded-lg w-[260px] p-4 right-12 overflow-hidden bg-white top-0">
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block font-semibold text-gray-700 mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Category:
                </label>
                <select
                  id="category"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="appliances">Appliances</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="minPrice"
                  className="block font-semibold text-gray-700 mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Min Price:
                </label>
                <input
                  type="number"
                  id="minPrice"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none"
                  placeholder="Min Price"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="maxPrice"
                  className="block font-semibold text-gray-700 mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Max Price:
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none"
                  placeholder="Max Price"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block font-semibold text-gray-700 mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Brand:
                </label>
                <select
                  id="brand"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="nike">Nike</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white">
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
