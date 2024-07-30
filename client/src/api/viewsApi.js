import axios from 'axios';
const BACKEND_ORIGIN_URL = import.meta.env.VITE_BACKEND_URL;

const getViews=async ({formId})=>{
   
    try{
        const response= await axios.get(`/views/get`,{params: { formId }});
  
        return response;
    }catch(error){
       return error.response.data;
    }
}

const setTheViews=async ({formId,views})=>{
   
    try{
        const response= await axios.post(`/views/set`,{formId,views});
        
        return response;
    }catch(error){
       return error.response.data;
    }
}

export {getViews,setTheViews};