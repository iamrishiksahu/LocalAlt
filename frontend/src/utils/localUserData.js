const setLocalUserData = ({data}) => {
    localStorage.setItem('user', data )
}

const getLocalUserData = () => {
    return localStorage.getItem('user')
}
export {setLocalUserData, getLocalUserData}