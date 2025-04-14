import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api';


const apiClient = axios.create({
  baseURL: API_BASE_URL,
});


export const loginStrapi = async ({ identifier, password }) => {
  try {
    const response = await apiClient.post('/auth/local', {
      identifier,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Erro no login Strapi:', error.response?.data || error.message);
    throw error;
  }
};

export const getProtectedData = async (token, endpoint) => {
  try {
    const response = await apiClient.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer a busca de dados:', error.response?.data || error.message);
    throw error;
  }
};