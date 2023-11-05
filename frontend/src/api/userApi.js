import axiosApi from "../utils/axiosConfig";

export const addUser = async (postData) => {
    try {
        const response = await axiosApi.post('/auth/register', postData);
        // console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};

