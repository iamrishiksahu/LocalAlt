import axiosApi from "../utils/axiosConfig";

const searchProductsByQuery = async ({query}) => {

    try{
        const data = await axiosApi.get(`/products/search?query=${query}`)
        if(data){
            console.log(data)    
        }
    }catch(err){
        console.log(err)
    }

}

export {searchProductsByQuery}