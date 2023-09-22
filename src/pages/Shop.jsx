import { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [show, setShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);
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
      "  shadow bg-purple-600   bg-opacity-50  ",
      "  shadow bg-purple-600 bg-opacity-50  ",
      "  shadow bg-purple-600   bg-opacity-50  ",
      "  shadow bg-purple-600 bg-opacity-50  ",
      "  shadow bg-purple-600  bg-opacity-50  ",
      "  shadow bg-purple-600   bg-opacity-50  ",
      "  shadow bg-purple-600 bg-opacity-50  ",
      "  shadow bg-purple-600 bg-opacity-50  ",
      "  shadow bg-purple-600  bg-opacity-50  ",
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
    <div className="container  bg w-full min-h-screen  pb-[100px] flex flex-col items-center ">
      <div className="row   mb-5 w-full bg-purple-900 relative flex justify-between items-center">
        {/* <h1 className="text-white text-xl  inline-block uppercase font-bold p-2">
          |Shop
        </h1> */}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="filter_menu fixed z-[9999999] bg-purple-600 text-white hover:bg-yellow-500 rounded-full shadow-lg right-[10px] bottom-[9%]"
        >
          <button
            ref={buttonRef}
            onClick={() => setFilter(!filter)}
            className="w-12 h-12 border-2 border-white rounded-full flex justify-center items-center"
          >
            <AiFillFilter className="" />
          </button>
          {filter && (
            <motion.div
              ref={menuContainerRef}
              initial={{ opacity: 0, y: -50 }}
              animate={filter ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute shadow-lg  w-[200px] p-4 right-12 overflow-hidden bg-gradient-to-t from-purple-700 to-blue-400 bottom-0"
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
                  className="w-full border-b-2 px-2  bg-transparent py-1 focus:outline-none placeholder:text-white"
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
                  className="w-full text-white border-b-2  py-2 px-3  bg-transparent focus:outline-none"
                >
                  <option className="text-gray-500 font-semibold" value="all">
                    All
                  </option>
                  {[...new Set(products.map((item) => item.category))].map(
                    (category, index) => {
                      return (
                        <option
                          className="text-gray-500 font-semibold"
                          value={category}
                          key={index}
                        >
                          {category}
                        </option>
                      );
                    }
                  )}
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
                  className="w-full placeholder:text-white text-white border-b-2  py-2 px-3 focus:outline-none bg-transparent"
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
                  className="w-full  placeholder:text-white text-white border-b-2  bg-transparent py-2 px-3 focus:outline-none"
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
                  className="w-full   placeholder:text-white text-white border-b-2  bg-transparent py-2 px-3 focus:outline-none"
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
              <div className="mb-4 mt-4">
                <label
                  htmlFor="tags"
                  className=" font-semibold text-white mb-2 flex items-center"
                >
                  <AiFillFilter className="mr-2" />
                  Tags:
                </label>
                <div className="flex gap-2 flex-wrap ">
                  {["food", "electronics", "clothing", "accessories"].map(
                    (tag, index) => (
                      <button
                        onClick={() => handleTagChange(tag)}
                        key={index}
                        className="flex border px-[4px] items-center"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="row w-full grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <>
            <motion.div
              key={index}
              className={`col w-full h-full transition-all  p-[1px] delay-100 duration-500 group layout bg-purple-500 relative group overflow-hidden `}
              onClick={() => {
                setHoveredProduct(index);
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1 }}
            >
              <div className="w-full relative h-64  p-10 bg-white flex justify-center items-center">
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
                    <AiFillEye className="text-purple-600 text-6xl" />
                  </button>
                  {show && (
                    <Modal onClose={() => setShow(false)}>
                      <div className="flex relative lg:p-14 overflow-y-auto flex-col w-full  h-full">
                        <div
                          className={` w-full flex flex-col lg:flex-row lg:h-[70%]  `}
                        >
                          <div className="flex relative border-r bg-white w-full justify-center h-full items-center">
                            <img
                              className="w-full p-10 h-full object-contain"
                              src={product.image}
                              alt=""
                            />
                            <div className="absolute overflow-x-auto whitespace-nowrap bg-white border p-3 w-full h-[100px] justify-between gap-2  bottom-0 flex left-0">
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1 shrink-0"
                                src={product.image}
                                alt=""
                              />
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1 shrink-0"
                                src={product.image}
                                alt=""
                              />
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1 shrink-0"
                                src={product.image}
                                alt=""
                              />
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1 shrink-0"
                                src={product.image}
                                alt=""
                              />
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1 shrink-0"
                                src={product.image}
                                alt=""
                              />
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1 shrink-0"
                                src={product.image}
                                alt=""
                              />
                              <img
                                className="w-[100px] cursor-pointer h-full object-contain border p-1"
                                src={product.image}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex justify-start w-full pb-10 overflow-y-auto flex-col  gap-4 pt-2 px-5 lg:px-10">
                            <h1 className="text-gray-800 mt-5  font-bold text-xl">
                              {product.title}
                            </h1>
                            <h4 className="text-purple-600 text-sm font-bold">
                              {product.category}
                            </h4>

                            <h4 className="text-purple-600 text-sm font-bold">
                              Rating: {product.rating.rate}
                            </h4>
                            <h4 className="text-purple-600 text-sm font-bold">
                              Stock: {product.rating.count}
                            </h4>
                            <Link href="" className="text-purple-600 font-bold">
                              Price: $ {product.price}
                            </Link>
                            <div className="flex gap-3">
                              <span className="w-5 h-5 bg-orange-500 rounded-full"></span>
                              <span className="w-5 h-5 bg-green-500 rounded-full"></span>
                              <span className="w-5 h-5 bg-red-500 rounded-full"></span>
                            </div>
                            <p className="text-sm text-justify text-bold text-gray-700">
                              {product.description}
                            </p>
                            <hr className="bg-white text-white h-[2px]" />

                            <div className="flex items-center">
                              <button className="bg-purple-600 px-4 py-2 hover:bg-purple-900 ">
                                Add to cart
                              </button>
                              <button className="bg-red-600 px-2 py-3 hover:bg-purple-900 ml-2">
                                <FaHeart />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-full  h-[500px]  bg-purple-500  py-5 gap-1 text-center  flex-col`}
                        >
                          <h1 className="text-purple-100 text-xl border-b font-bold border-b-purple-100 my-4">
                            Related Product
                          </h1>
                          <div className=" overflow-x-auto whitespace-nowrap overflow-y-hidden  flex gap-3 justify-start py-10 px-5 items-center">
                            {products
                              .filter(
                                (cat) => cat.category === product.category
                              )
                              .map((item, index) => {
                                return (
                                  <div
                                    className=" group shrink-0 p-5 w-[150px] lg:w-[200px] bg-white rounded-xl shadow-lg h-[150px] lg:h-[200px]"
                                    key={index}
                                  >
                                    <img
                                      className="w-full h-full cursor-pointer object-contain"
                                      src={item.image}
                                      alt=""
                                    />
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}
                </motion.div>
              )}
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Shop;
