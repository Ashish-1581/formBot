import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getTheme = async ({formId}) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/theme/get`,{params: { formId }});
        return response.data;

    } catch (error) {
        console.error('Error fetching theme:', error);
       
    }
}

const setTheme = async ({formId,theme}) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/theme/set`, { theme },{params: { formId }});
        return response;
    } catch (error) {
        console.error('Error setting theme:', error);
        return { error: error.response ? error.response.data : error.message };
    }
}

export { getTheme, setTheme };

