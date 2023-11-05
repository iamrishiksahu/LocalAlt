import axios from "axios";
import axiosApi from "../utils/axiosConfig";
import { getCurrentLocation } from "../utils/geolocation";

const searchProductsByQuery = async ({ query }) => {

    await getCurrentLocation()
    const lat = localStorage.getItem('latitude')
    const lon = localStorage.getItem('longitude')

    try {
        const data = await axiosApi.post(`/products/products-by-distance/${query}`, {
            longitude: lat,
            latitude: lon
        })
        if (data) {
            return data.data.products
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

        if (err.response.status == 404) {
            alert('Product Not Found!')
        } else if (err.response.status == 403) {
            alert('Store is invalid!')
        } else {
            console.log(err)
            return { isError: true, ...err }
        }
    }
}

const getAllProduct = async () => {
    try {
        const data = await axiosApi.get(`/products/all-products`)
        return data.data.products
    } catch (err) {
        console.log(err)
        return { isError: true, ...err }
    }
}

const addProduct = async (postData) => {
    try {
        const response = await axiosApi.post('/products/add-product', postData);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};
const login = async (postData) => {
    try {
        const response = await axiosApi.post('/auth/login', postData);
        return response.data.user
    } catch (err) {
        console.log(err);
        return err
    }
};

const getAllProductByDistance = async (postData) => {
    try {
        const response = await axiosApi.post('/products/products-by-distance")', postData);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};



export { searchProductsByQuery, getSingleProductWithId, addProduct, getAllProduct, login, getAllProductByDistance }
