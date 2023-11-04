const successHandler = async (position) => {
    const lat = (position.coords.latitude);
    const lon = (position.coords.longitude);

    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude', lon);

    // console.log(lat, lon);

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

export { getCurrentLocation }