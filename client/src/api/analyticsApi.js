import axios from 'axios';
const BACKEND_URL = 'http://localhost:4000';



const setSubmissions=async ({formId,data,inputFieldCount}) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/analytics/set/${formId}`,{data,inputFieldCount});
        return response;
    } catch (error) {
        return error;
    }
}

const getSubmissions=async (formId) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/analytics/get/${formId}`);
        return response;
    } catch (error) {
        return error;
    }
}


export {setSubmissions,getSubmissions};