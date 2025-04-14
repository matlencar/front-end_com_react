import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const loginReqres = async ({ email, password }) => {
  try {
    const response = await apiClient.post('/login', { email, password });
    return response.data; // { token: '...' }
  } catch (error) {
    console.error('Erro no login ReqRes:', error.response?.data || error.message);
    throw error;
  }
}

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