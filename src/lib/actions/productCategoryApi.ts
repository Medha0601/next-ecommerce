"use server"


const getCategoryData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products/categories')
        let data = await response.json();
        return data
    } catch (e: any){
        return {message: e.message};

    }
    
}

export default getCategoryData