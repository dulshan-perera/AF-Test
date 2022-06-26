import jwtDecode from "jwt-decode";

export const getAuth = () =>{
    const token  = localStorage.getItem('authentication');
    return token? jwtDecode(token) : null
}
