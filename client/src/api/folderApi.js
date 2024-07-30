import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const createFolder = async (data, token) => {
  try {
    const response = await axios.post(`/folder/create`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};

const deleteFolder = async (id, token) => {
  try {
    const response = await axios.delete(`/folder/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getFolderById = async (id, token) => {
  try {
    const response = await axios.get(`/folder/get/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

const getFolder = async (token) => {
  try {
    const response = await axios.get(`/folder/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { createFolder, getFolder, deleteFolder,getFolderById  };
