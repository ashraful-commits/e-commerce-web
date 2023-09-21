import { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion";
import Modal from "../components/Modal/Modal";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
      });
  }, []);

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleTagChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const applyFilters = () => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Brand filter
    if (selectedBrand !== "all") {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    // Price range filter
    if (minPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((product) =>
        selectedTags.every((tag) => product.tags.includes(tag))
      );
    }

    // Search filter
    if (searchTerm !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    selectedTags,
    searchTerm,
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getRandomBorderColor = () => {
    const colors = [
      "  shadow  bg-purple-100 ",
      "  shadow  bg-pink-100 ",
      "  shadow  bg-yellow-100 ",
      "  shadow  bg-sky-100 ",
      "  shadow  bg-skyblue-100 ",
      "  shadow  bg-orange-100 ",
      "  shadow  bg-red-100 ",
      "  shadow  bg-lime-100 ",
      "  shadow  bg-amber-100 ",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  //==================================
  const buttonRef = useRef(null);
  const menuContainerRef = useRef(null);
  console.log(buttonRef, menuContainerRef);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target)
      ) {
        setFilter(false);
      }
    };

    if (filter) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filter]);
  return (
    <div className="container bg w-full min-h-screen  pb-[200px] py-10 flex flex-col items-center ">
      <div className="absolute -top-10 -left-20 w-60 h-60 rounded-full rotate-[20deg] bg-gradient-to-r from-purple-700 bg-white bg-opacity-10"></div>
      <div className="absolute top-0 left-[45%] w-60 h-60 rounded-full rotate-[20deg] bg-gradient-to-t from-purple-700 bg-white bg-opacity-10"></div>
      <div className="absolute -bottom-10 -left-20 w-60 h-60 rounded-full bg-gradient-to-l from-blue-700 bg-white bg-opacity-10"></div>
      <div className="absolute top-[40%] -left-40 w-96 h-96  bg-gradient-to-r from-purple-700 bg-white bg-opacity-10"></div>
      <div className="absolute -top-10 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-purple-700 bg-white bg-opacity-10"></div>
      <div className="absolute -bottom-10 -right-20 w-60 h-60  bg-gradient-to-b from-blue-700 bg-white bg-opacity-10"></div>
      <div className="row mb-5 w-full bg-purple-900 relative flex justify-between items-center">
        {/* <h1 className="text-white text-xl  inline-block uppercase font-bold p-2">
          |Shop
        </h1> */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="filter_menu fixed z-[9999] bg-purple-600 text-white hover:bg-yellow-500 rounded-full shadow-lg right-[10px] bottom-[9%]"
        >
          <button
            ref={buttonRef}
            onClick={() => setFilter(!filter)}
            className="w-12 h-12 border-2 border-white rounded-full flex justify-center items-center"
          >
            <AiFillFilter />
          </button>
          {filter && (
            <motion.div
              ref={menuContainerRef}
              initial={{ opacity: 0, y: -50 }}
              animate={filter ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute shadow-lg rounded-lg w-[250px] p-4 right-12 overflow-hidden bg-purple-600 -bottom-4"
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
                  value={searchTerm}
                  onChange={handleSearchChange}
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
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="w-full text-gray-600 border rounded-md py-2 px-3 focus:outline-none"
                >
                  <option className="text-gray-500 font-semibold" value="all">
                    All
                  </option>
                  {[...new Set(products.map((item) => item.category))].map(
                    (category, index) => {
                      return (
                        <option value={category} key={index}>
                          {category}
                        </option>
                      );
                    }
                  )}
                  ZZ
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
                  value={minPrice}
                  onChange={handleMinPriceChange}
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
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
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
                  value={selectedBrand}
                  onChange={handleBrandChange}
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
                  htmlFor="tags"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Tags:
                </label>
                <div>
                  {["food", "electronics", "clothing", "accessories"].map(
                    (tag, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedTags.includes(tag)}
                          onChange={() => handleTagChange(tag)}
                        />
                        {tag}
                      </label>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="row w-full grid grid-cols-1 sm:grid-cols-2 gap-[1px] md:grid-cols-3 lg:grid-cols-4 content-center ">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={index}
            className={`col w-full h-full transition-all  border p-1 delay-100 duration-500 group bg-white relative group overflow-hidden `}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="w-full h-64  p-10 bg-white flex justify-center items-center">
              <motion.img
                src={product.image}
                alt=""
                className="object-contain  transition-transform transform hover:scale-100 duration-300 w-full h-full"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1 }}
              />
            </div>
            {hoveredProduct === index && (
              <motion.div
                className={`product-details group-hover:transition-all group-hover:delay-100 group-hover:duration-500 absolute w-full h-full top-0 left-0 ${getRandomBorderColor()} text-white p-4 flex flex-col justify-center items-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={() => setShow(!show)}
                  className="bg-white rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <AiFillEye className="text-purple-600 text-2xl" />
                </button>
                {show && (
                  <Modal onClose={() => setShow(false)}>
                    <div
                      className={` w-full  ${getRandomBorderColor()}  h-full overflow-y-auto `}
                    >
                      <div className="flex justify-center items-center">
                        <img
                          className="w-full h-full object-cover"
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-4 py-10 px-5">
                        <h1 className="text-gray-700 mt-5  font-bold text-xl">
                          {product.title}
                        </h1>
                        <p className="text-sm text-bold text-gray-500">
                          {product.description}
                        </p>
                        <hr />
                        <h4 className="text-purple-400 text-sm font-bold">
                          Category: {product.category}
                        </h4>
                        <h4 className="text-purple-400 text-sm font-bold">
                          Rating: {product.rating.rate}
                        </h4>
                        <h4 className="text-purple-400 text-sm font-bold">
                          Stock: {product.rating.count}
                        </h4>
                        <h4 className="text-purple-600 font-bold">
                          Price: $ {product.price}
                        </h4>

                        <div className="flex items-center">
                          <button className="bg-purple-600 px-4 py-2 hover:bg-purple-900 rounded-md">
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
