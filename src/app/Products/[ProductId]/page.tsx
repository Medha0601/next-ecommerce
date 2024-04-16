"use client";
import { ProductType } from "@/app/types/product";
import { getProductById } from "@/lib/actions/productApis";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ProductDetailsProps {
  params: {
    ProductId: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
    const [productDetail, setProductDetail] = useState<ProductType>({});
    const id = params.ProductId;
    const router = useRouter()

  useEffect(() => {
    getProductById(id)
      .then((data: ProductType) => {
        setProductDetail(data);
      })
      .catch((error: any) => {
        console.error("Error in fetching product detail", error);
      });
  }, []);


  const handleBackBtn = () => {
    console.log("hello")
    router.push('/Products')
  }
  return (
    <div>
      <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-4"
      onClick={() => handleBackBtn()}
      >
        Back
      </button>
      <div className=" flex container mx-auto py-8 justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-md">
            <img
              src={productDetail.image}
              alt={productDetail.title}
              className="w-full"
            />
          </div>
          <div>
            <h2 className=" text-2xl font-bold mb-4">{productDetail.title}</h2>
            <p className=" text-base font-medium mb-4">
              {productDetail.description}
            </p>
            <div className="flex items-center mb-4">
              <span className=" pr-2">Rating:</span>
              <div className="flex items-center mr-4">
                <span className=" text-yellow-500 mr-1">
                  {productDetail?.rating?.rate}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.29 6.71a1 1 0 011.414 0L10 11.586l5.293-5.295a1 1 0 111.414 1.415l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className=" text-lg font-bold">${productDetail.price}</span>
            </div>
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
