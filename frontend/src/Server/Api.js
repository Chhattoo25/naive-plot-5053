import axios from 'axios';


const url = 'http://localhost:8080'

export const adduser=async(user)=>{
    try {
         await axios.post(`${url}/add`,user)
         console.log(user)
    } catch (error) {
        console.log('connection failed from api post')
        
    }
}