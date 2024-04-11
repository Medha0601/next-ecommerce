"use client";
import getProductData from "../../lib/actions/productApis";
import { ProductType } from "../types/product";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductItem = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData().then((data: any) => {
      if (data.error) {
        return console.error(data.error);
        // here we can also redirect to a specific page, if error occurs
      }
      setProducts(data);
    });
  }, []);
  console.log(products);
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: ProductType) => (
        <div key={product.id} className=" bg-gray-400 gap-7">
          <img 
            src={product.image}
            alt={product.title}
            className=""
          />

        </div>
      ))

      }

    </div>
     
      {/* {products?.map((product: ProductType) => (
        <>
          <div>title:{product.title}</div>
          <div>price:{product.price}</div>
          <div>description:{product.description}</div>
          <div> category:{product.category}</div>
          <div>image:{product.image}</div>
          <div>rating{product.rating.count}</div>
        </>
      ))} */}
    </>
  );
};

export default ProductItem;
