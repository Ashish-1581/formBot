import axios from "axios";
const BACKEND_URL = "http://localhost:4000";

const createFolder = async (data, token) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/folder/create`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};

const deleteFolder = async (id, token) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/folder/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getFolder = async (token) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/folder/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { createFolder, getFolder, deleteFolder };
