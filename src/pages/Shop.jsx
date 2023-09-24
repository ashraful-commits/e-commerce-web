import { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaHeart, FaHome } from "react-icons/fa";

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
  const [desCription, setDesCription] = useState(true);
  const [reviews, setReviews] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
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
      "  shadow bg-primary   bg-opacity-50  ",
      "  shadow bg-primary bg-opacity-50  ",
      "  shadow bg-primary   bg-opacity-50  ",
      "  shadow bg-primary bg-opacity-50  ",
      "  shadow bg-primary  bg-opacity-50  ",
      "  shadow bg-primary   bg-opacity-50  ",
      "  shadow bg-primary bg-opacity-50  ",
      "  shadow bg-primary bg-opacity-50  ",
      "  shadow bg-primary  bg-opacity-50  ",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  //==================================
  const buttonRef = useRef(null);
  const menuContainerRef = useRef(null);

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
    <div className="container  bg w-full min-h-screen  pb-[10px] flex flex-col items-center ">
      <div className="row bg-gradient-to-r  from-[#5CD2E6] to-[#5CD2E6]  w-full relative h-10">
        <div className="text-white  fixed z-[999999999]  px-4 py-2 flex items-center">
          <Link
            to={"/"}
            className="text-white flex items-center gap-1 text-sm capitalize"
          >
            <FaHome /> Home
          </Link>

          <FaGreaterThan className="text-sm mx-1" />

          <Link
            to={"/shop"}
            className="flex items-center text-white text-sm capitalize"
          >
            shop
          </Link>
        </div>
      </div>
      <div className="row mb-5 w-full bg-primary relative flex justify-between items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="filter_menu fixed z-[999999] bg-primary text-white hover:bg-secondary rounded-full shadow-lg right-[8px] top-[36%]"
        >
          <button
            ref={buttonRef}
            onClick={() => setFilter(!filter)}
            className="w-12 group h-12 border-2 border-white rounded-full flex justify-center items-center"
          >
            <AiFillFilter className="" />
            <label
              className="`text-sm group-hover:animate-bounce  absolute whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 right-10 text-gray-500 text-center transition-opacity bg-white  rounded-lg rounded-br-none rounded-tr-none py-[.2rem] px-4`"
              htmlFor=""
            >
              Filter
            </label>
          </button>
          {filter && (
            <motion.div
              ref={menuContainerRef}
              initial={{ opacity: 0, y: -50 }}
              animate={filter ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute shadow-lg  w-[200px] p-4 right-12 overflow-hidden bg-gradient-to-t from-[#5CD2E6] to-[#78D6C6] -bottom-96"
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

      <div className="row shadow-lg  w-full grid grid-cols-1 layout  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <>
            <motion.div
              key={index}
              className={`col w-full h-full transition-all layout border-b-2 border-[#78D6C6] delay-100 duration-500 group layout bg-primary relative group overflow-hidden `}
              onClick={() => {
                setHoveredProduct(index);
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1 }}
            >
              <div
                className={`w-full relative h-64  p-10 bg-white flex justify-center items-center`}
              >
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
                    className="bg-secondary rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <AiFillEye className="text-white text-6xl" />
                  </button>
                  {show && (
                    <Modal onClose={() => setShow(false)}>
                      <div className="flex relative overflow-y-auto flex-col w-full  h-full">
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
                          <div className="flex justify-start w-full pb-10 overflow-y-auto flex-col  gap-4 pt-2 px-0 lg:px-10">
                            <h1 className="text-secondary mt-5  font-bold text-xl">
                              {product.title}
                            </h1>
                            <Link className="text-blue-600 text-sm font-bold">
                              {product.category}
                            </Link>

                            <h4 className="text-gray-600 text-sm font-bold">
                              Rating: {product.rating.rate}
                            </h4>
                            <h4 className="text-gray-600 text-sm font-bold">
                              Stock: {product.rating.count}
                            </h4>
                            <h1
                              href=""
                              className="text-primary text-xl  font-bold"
                            >
                              Price:{" "}
                              <span className="text-secondary">
                                $ {product.price}
                              </span>
                            </h1>
                            <div className="flex gap-3">
                              <span className="w-5 h-5 bg-[blue] rounded-full"></span>
                              <span className="w-5 h-5 bg-[red] rounded-full"></span>
                              <span className="w-5 h-5 bg-[black] rounded-full"></span>
                            </div>
                            <p className="text-sm text-justify text-bold text-gray-700">
                              {product.description}
                            </p>
                            <hr className="bg-white text-white h-[2px]" />

                            <div className="flex items-center">
                              <button className="bg-primary px-4 py-2 hover:bg-secondary">
                                Add to cart
                              </button>
                              <button className="bg-[red] px-2 py-3 hover:bg-secondary ml-2">
                                <FaHeart />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-full  h-[500px]   bg-primary my-4 text-center  `}
                        >
                          <div className="button_group  my-3 space-x-3 ">
                            <button
                              onClick={() => {
                                setDesCription(true), setReviews(false);
                              }}
                              className={`border hover:bg-secondary ${
                                desCription ? "bg-secondary border-none" : ""
                              } border-white px-2 py-1`}
                            >
                              Description
                            </button>
                            <button
                              onClick={() => {
                                setDesCription(false), setReviews(true);
                              }}
                              className={`border hover:bg-secondary ${
                                reviews ? "bg-secondary  border-none" : ""
                              } border-white px-2 py-1`}
                            >
                              Reviews
                            </button>
                          </div>
                          <div className="bg-white h-[300px] border-t-2 border-t-secondary p-3 overflow-y-auto">
                            {desCription && (
                              <div className="description$ overflow-y-auto">
                                <h1 className="text-secondary text-xl font-bold text-left">
                                  Description
                                </h1>
                                <hr className="my-2" />
                                <p className="text-gray-500 text-justify">
                                  {product.description}
                                </p>
                              </div>
                            )}
                            {reviews && (
                              <div className="Reviews  relative  w-full px-4">
                                <div className="header border-b-2 py-2 border-b-gray-500">
                                  <p className="text-gray-600 text-lg font-bold">
                                    Customer Reviews
                                  </p>
                                  <p className="text-gray-600 text-md font-bold">
                                    *****
                                  </p>

                                  <p className="text-gray-600">
                                    45%|163 reviews
                                  </p>
                                  <p className="text-gray-600 text-lg font-bold">
                                    Polar Pl 323 Polarized 80c
                                  </p>
                                </div>
                                <div className="reviews relative w-full flex flex-col justify-between items-center">
                                  <div className="w-full my-4 flex justify-between items-center">
                                    <div className="Reviews_datials gap-3 flex items-center">
                                      <img
                                        className="w-10 rounded-full h-10 object-cover"
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                                        alt=""
                                      />
                                      <div className="datials flex flex-col items-start">
                                        <p className="text-md text-secondary font-bold">
                                          Md ashraful alam
                                        </p>
                                        <div className="email_tim flex justify-between items-center gap-1">
                                          <p className="text-xs text-gray-500">
                                            ashrafulalam@gmail.com
                                          </p>
                                          <span className="text-gray-500">
                                            |
                                          </span>
                                          <p className="text-xs text-gray-500">
                                            10 min ago
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <img
                                      className="w-10 rounded-full h-10 object-cover"
                                      src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="comments w-full mt-4 border-t flex flex-col items-start border-t-secondary">
                                    <p className="text-gray-500 text-xl">
                                      ****
                                    </p>
                                    <p className="text-sm text-gray-400 text-justify">
                                      Lorem ipsum, dolor sit amet consectetur
                                      adipisicing elit. Repellendus, quibusdam
                                      voluptatibus facilis illo tempore dolorem
                                      consectetur aperiam voluptates pariatur
                                      itaque?
                                    </p>
                                  </div>
                                </div>
                                <div className="input mt-10 absolute  shadow-lg  left-0 w-full bottom-0">
                                  <input
                                    type="text"
                                    className="w-full focus:outline-none text-gray-500 p-1 shadow-md "
                                    placeholder="Reviews please"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className={`w-full  h-[500px]  bg-primary  gap-1 text-center  flex-col`}
                        >
                          <h1 className="text-gray-100 text-xl border-b font-bold border-b-gray-100 my-4">
                            Related Product
                          </h1>
                          <div className=" overflow-x-auto whitespace-nowrap overflow-y-hidden  flex gap-3 justify-start py-5 px-5 items-center">
                            {products
                              .filter(
                                (cat) => cat.category === product.category
                              )
                              .map((item, index) => {
                                return (
                                  <div
                                    className=" group shrink-0 p-5 w-[150px] lg:w-[200px] bg-white rounded-sm shadow-lg h-[150px] lg:h-[200px]"
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
