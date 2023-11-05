import axiosApi from "../utils/axiosConfig"

const getStoreData = () => {
    try {
        const res = axiosApi.get('/stores', {

            

        })

        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const updateStoredata = () => {
    try {
        const res = axiosApi.put('/stores', {

        })

        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export { getStoreData, updateStoredata }