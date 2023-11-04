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
export { searchProductsByQuery, getSingleProductWithId }
