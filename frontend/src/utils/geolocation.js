const successHandler = async (position) => {
    const lat = (position.coords.latitude);
    const lon = (position.coords.longitude);

    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude', lon);

};

const errorHandler = (err) => {
    alert(err.code + ":" + err.message);

}

const getCurrentLocation = async () => {


    navigator.geolocation.getCurrentPosition(
        successHandler,
        errorHandler,
        { enableHighAccuracy: true, maximumAge: 10000 }
    );
}

const getLatLong = async () => {
    await getCurrentLocation()
    const latitude = parseInt(localStorage.getItem('latitude'), 10)
    const longitude = parseInt(localStorage.getItem('longitude'), 10)
    return { latitude, longitude }
}




export { getCurrentLocation, getLatLong }