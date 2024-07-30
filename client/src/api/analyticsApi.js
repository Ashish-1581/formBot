import axios from 'axios';
const BACKEND_URL =  import.meta.env.VITE_BACKEND_URL;



const setSubmissions=async ({formId,data,inputFieldCount}) => {
    try {
        const response = await axios.post(`/analytics/set/${formId}`,{data,inputFieldCount});
        return response;
    } catch (error) {
        return error;
    }
}

const getSubmissions=async ({formId,token}) => {
    try {
        const response = await axios.get(`/analytics/get/${formId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        return response;
    } catch (error) {
        return error;
    }
}


export {setSubmissions,getSubmissions};