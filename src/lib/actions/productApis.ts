"use server"


const getProductData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json();
        return data
    } catch (e: any){
        return {message: e.message};

    }
    
}

export default getProductData