import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import InputRange from 'rc-slider'
import "rc-slider/assets/index.css";
import getCategoryData from "@/lib/actions/productCategoryApi";
import { productCategory } from "../types/category";
import Loader from "./Loader";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const handlePriceChange = (max) => {
    // Handle price change logic
    console.log(max);
    setPriceRange([priceRange[0], max]);
  };

  const handleSelectedCategory = (categoryName: productCategory) => {
    console.log(categoryName);
    setSelectedCategory(categoryName);
  };
  useEffect(() => {
    getCategoryData()
      .then((data: productCategory) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error in fetching category data", error);
      });
  }, []);

  console.log(priceRange);
  console.log(selectedCategory)

  return (
    <div className="absolute top-12 left-0 mt-10 h-full w-1/6 bg-black bg-opacity-80 text-white p-4">
      <div>
        {/* price */}
        <h3 className="text-white">Price Range</h3>
        <div className="flex justify-between items-center">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <InputRange
          className=" px-3 "
          min={0}
          max={1000} // Set max price range as needed
          step={50} // Adjust step as needed
          defaultValue={priceRange} // Set initial default values
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <h2>Categories</h2>
        <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
          {categories.length === 0 ? (
            <>
              <Loader  height = {6} width={6}/>
            </>
          ) : (
            <>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="my-3 hover:bg-sky-100 dark:hover:bg-sky-700 hover:border-sky-200 dark:hover:border-sky-600/15 px-2 py-0.5 rounded-full cursor-pointer transition-colors duration-300"
                  onClick={()=>handleSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
