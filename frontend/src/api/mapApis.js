import axios from "axios";

const getPlaceNameWithLatLong = async ({ lat, lon }) => {

    let res;
    try {
        const data = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
        const op = data.data.features[0].properties
        res = op.name || op.street || op.city || op.suburb || op.country || op.address_line1;
    }catch(err){
        res = {isError: true, ...err};
    }

    return res;
}

export {getPlaceNameWithLatLong}