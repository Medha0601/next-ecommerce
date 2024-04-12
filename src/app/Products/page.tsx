"use client";
import getProductData from "../../lib/actions/productApis";
import { ProductType } from "../types/product";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      {products.map((product: ProductType, index: number) => (
        <div className="bg-black p-4 my-4 flex items-center justify-between" key={index}>
          {/* Image */}
          <div className="flex-shrink-0 mr-4">
            <img src={product.image} alt={product.title} width={100} height={100} />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-white text-xl font-bold">{product.title}</h2>
            <p className="text-gray-400">{product.description}</p>
            <p className="text-gray-400">Price: ${product.price}</p>
            <p className="text-gray-400">Category: {product.category}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
