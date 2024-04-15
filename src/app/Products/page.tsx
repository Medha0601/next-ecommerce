"use client";
import getProductData from "@/lib/actions/productApis";
import { useEffect, useState } from "react";
import { ProductType } from "../types/product";
import Loader from "../components/Loader";
import ProductItem from "./ProductItem";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Sidebar";
import { productCategory } from "../types/category";
// import { DebounceFunction } from "../types/debounce";

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchVal, setSearchVal] = useState<String>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState<productCategory>();
  const [applyChanges, setApplyChanges] = useState(false);

  console.log(priceRange);
  console.log(selectedCategory);
  useEffect(() => {
    getProductData()
      .then((data: ProductType[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error in fetching product data", error);
      });
  }, []);

  console.log("APPLYYY CHANGES", applyChanges);
  // FUNCTION TO REDUCE TITLE NAME
  const truncateTitle = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else return text;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const toggleSidebar = () => {
    console.log("TOGGLE BTN");
    setSidebarOpen((prev) => !prev);
  };
  const handlePriceChange = (max: number) => {
    // Handle price change logic
    console.log(max);
    setPriceRange([priceRange[0], max]);
  };

  const handleSelectedCategory = (categoryName: productCategory) => {
    console.log(categoryName);
    setSelectedCategory(categoryName);
  };

  const onApplyChanges = () => {
    setApplyChanges(true);
  };

  const onResetChanges = () => {
    setApplyChanges(false);
  };
  // const debounce: DebounceFunction<(...args: any[]) => any> = (func, delay) => {
  //   let debounceTimer: ReturnType<typeof setTimeout>;

  //   return function(...args: Parameters<typeof func>) {
  //     const context = this as unknown as ThisParameterType<typeof func>;
  //     clearTimeout(debounceTimer);
  //     debounceTimer = setTimeout(() => func.apply(context, args), delay);
  //   };
  // };

  const filteredProduct = products.filter((product: ProductType) =>
    product.title.toLowerCase().includes(searchVal.toLowerCase())
  );

  const filterPriceRange = applyChanges
  ? products.filter((product: ProductType) => {
      const priceCondition =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const categoryCondition =
        selectedCategory === undefined ||
        product.category === selectedCategory;
      return priceCondition && categoryCondition;
    })
  : products;

  

  return (
    <div className={` ${sidebarOpen ? " ml-80" : " "}`}>
      <div className={`flex ml-7 items-center space-x-7 mb-4 `}>
        {" "}
        {/* Add margin-bottom */}
        <FaFilter
          className="text-gray-500 cursor-pointer"
          onClick={toggleSidebar}
        />
        <input
          placeholder="Search"
          className="bg-slate-500 ring-1 pl-5 placeholder-italic text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-1 px-3"
          value={searchVal}
          onChange={handleSearchChange}
        />
      </div>
      {sidebarOpen && (
        <FilterSidebar
          priceRange={priceRange}
          selectedCategory={selectedCategory}
          applyChanges={applyChanges}
          handlePriceChange={handlePriceChange}
          handleSelectedCategory={handleSelectedCategory}
          onApplyChanges={onApplyChanges}
          onResetChanges={onResetChanges}
        />
      )}
      <div className="container mx-auto p-4">
        {products.length === 0 ? (
          <Loader height={32} width={"auto"} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* {filteredProduct.map((product: ProductType) => ( */}
            {filterPriceRange.map((product: ProductType) => (
              <Link
                href={`Products/${product.id}`}
                className="group"
                key={product.id}
              >
                <div className="block md:flex-2 lg:flex bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mx-3 my-3 h-40 w-40 group-hover:opacity-75"
                  />

                  <div className="p-4">
                    <h3 className="text-sm text-gray-100">
                      {truncateTitle(product.title, 4)}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-100">
                      ${product.price}
                    </p>
                  </div>
                  <div className="mr-4 mb-4 mt-20">
                    <button className="bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center">
                      <HiShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
