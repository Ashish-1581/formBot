import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const createForm=async (data,token) => {
    try {
        const response = await axios.post(`/form/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error creating form:', error);
        return { error: error.response ? error.response.data : error.message };
    }
}

const getSingleForm=async (id) => {
    try {
        const response = await axios.get(`/form/get/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}
const getFormByFolder = async (folderId,token) => {
    try {
      const response = await axios.get(`/form/get/by-folder/${folderId}`, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    });
      return response.data;
    } catch (error) {
      console.error('Error fetching forms by folder:', error);
      throw error;
    }
  };

  const getFormNotInFolder = async (token) => {
    try {
      const response = await axios.get(`/form/get/no-folder`, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    });
      return response.data;
    } catch (error) {
      console.error('Error fetching forms not in any folder:', error);
      throw error;
    }
  };

const updateForm=async (id,data,token) => {
    try {
        const response = await axios.put(`/form/update/${id}`,data, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}

const deleteForm=async (id,token) => {
    try {
        const response = await axios.delete(`/form/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}



export {createForm, getSingleForm, getFormByFolder, getFormNotInFolder, updateForm, deleteForm};