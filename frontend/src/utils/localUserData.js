const setLocalUserData = (response) => {
    localStorage.setItem('user', JSON.stringify(response))
}

const getLocalUserData = () => {
    return JSON.parse(localStorage.getItem('user'))
}
export {setLocalUserData, getLocalUserData}