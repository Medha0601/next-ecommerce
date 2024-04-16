'use client'
import { ProductType } from "@/app/types/product";
import { getProductById } from "@/lib/actions/productApis";
import { error } from "console";
import React, { useEffect, useState } from "react";

interface ProductDetailsProps {
  params: {
    ProductId: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
    const [productDetail, setProductDetail] = useState<ProductType>({})

    const id = params.ProductId

    useEffect(() => {
        getProductById(id)
        .then((data: ProductType)=>{
            setProductDetail(data);
        })
        .catch((error: any) => {
            console.error("Error in fetching product detail", error);
            
        }) 
    },[])

    return (
        <>

        {/* stylingg */}
        <h3>{id}</h3>
        <h3>{productDetail.title}</h3>
        </>
    )
  
};

export default ProductDetails;
