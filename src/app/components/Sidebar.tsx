import React, { useEffect, useState } from "react";
import InputRange from "rc-slider";
import "rc-slider/assets/index.css";
import {getCategoryData} from "@/lib/actions/productApis";
import { productCategory } from "../types/category";
import Loader from "./Loader";
import Slider from 'react-slider'

type filtertype = {
  priceRange: [number, number];
  selectedCategory: String;
  applyChanges: Boolean;
  handlePriceChange: (newPriceRange: number) => void;
  handleSelectedCategory: (newCategoryName: string) => () => void;
  onApplyChanges: () => void;
  onResetChanges: () => void;
  closeSidebar: () => void;
};
const FilterSidebar = ({
  priceRange,
  selectedCategory,
  applyChanges,
  handlePriceChange,
  handleSelectedCategory,
  onApplyChanges,
  onResetChanges,
  closeSidebar,
}: filtertype) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategoryData()
      .then((data: string[]) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error in fetching category data", error);
      });
  }, []);

  console.log(priceRange);
  console.log(selectedCategory);

  return (
    <div className="absolute top-12 left-0 mt-10 h-full w-1/6 bg-black bg-opacity-80 text-white p-4">
      <div>
        {/* price */}
        <button className="text-red-400" onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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
          {!categories ? (
            <>
              <Loader height={6} width={6} />
            </>
          ) : (
            <>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="my-3 hover:bg-sky-100 dark:hover:bg-sky-700 hover:border-sky-200 dark:hover:border-sky-600/15 px-2 py-0.5 rounded-full cursor-pointer transition-colors duration-300"
                  onClick={() => handleSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </>
          )}
        </ul>
      </div>

      <div className=" absolute bottom-1/2 right-0">
        <button
          onClick={onApplyChanges}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Apply
        </button>
        <button
          onClick={onResetChanges}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
