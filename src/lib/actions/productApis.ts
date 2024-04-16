"use server"

// ALL PRODUCTS
const getProductData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json();
        return data
    } catch (e: any){
        return {message: e.message};

    }
    
}

// ONLY ONE PRODUCT
const getProductById = async (productId:number) => {
    try{
        let response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        let data = await response.json();
        return data;
    }
    catch(e: any){
        return {message: e.message}
    }
}

// ALL GATEGORY
const getCategoryData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products/categories')
        let data = await response.json();
        return data
    } catch (e: any){
        return {message: e.message};

    }
    
}

export { getProductData, getProductById, getCategoryData}