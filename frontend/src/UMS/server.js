import axios from "axios"

const url = 'http://localhost:8000/user';

export const adduserurl =async(user)=>{
    try {
        await axios.post(`${url}/signup`,user);
        
    } catch (error) {
        console.log("error while calling the spi")
    }
}

export const addloginurl =async(user)=>{
    try {
        await axios.post(`${url}/login`,user);
        
    } catch (error) {
        console.log("error while calling the spi")
    }
}


export const addgoogle =async()=>{
    try {
        await axios.post('http://localhost:8000/auth/google');
        
    } catch (error) {
        console.log("error while calling the spi")
    }
}

// const usersUrl = 'http://localhost:8080';

// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }