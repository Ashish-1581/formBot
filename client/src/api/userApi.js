import axios from 'axios';
const BACKEND_ORIGIN_URL = 'http://localhost:4000';

const login=async ({email,password})=>{
    try{

        const response= await axios.post(`${BACKEND_ORIGIN_URL}/auth/login`,{email,password});
       
        return response;
    }catch(error){
       return error.response.data;
    }
}

const register=async ( {username, email, password, confirmPassword} )=>{
    try{

        const response= await axios.post(`${BACKEND_ORIGIN_URL}/auth/register`,{ username, email, password, confirmPassword });
       
        return response;
    }catch(error){
       return error.response.data;
    }
}

const updateUserDetails=async ( {username, email, oldPassword, newPassword} )=>{
    try{

        const response= await axios.post(`${BACKEND_ORIGIN_URL}/auth/update-user`,{ username, email, oldPassword, newPassword });
       
        return response;
    }catch(error){
       return error.response.data;
    }
}

export {login,register,updateUserDetails};