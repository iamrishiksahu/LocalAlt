import axiosApi from "../utils/axiosConfig";

const searchProductsByQuery = async ({ query }) => {

    try {
        const data = await axiosApi.get(`/products/search?query=${query}`)
        if (data) {
            console.log(data)
        }
    } catch (err) {
        console.log(err)
    }

}
const getSingleProductWithId = async ({ id }) => {
    try {
        const data = await axiosApi.get(`/products/${id}`)
        console.log(data)
        return data.data.product
    } catch (err) {
        console.log(err)
        return { isError: true, ...err }
    }
}

const addProduct = async (postData) => {
    try {
        const response = await axiosApi.post('products/add-product', postData);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};

export { searchProductsByQuery, getSingleProductWithId, addProduct }
