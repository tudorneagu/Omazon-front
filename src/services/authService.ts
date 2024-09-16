import axios from 'axios';
import type { RegisterParams } from '../@types/account.types';
const APP_API_URL = 'https://omazon-backend.onrender.com';
const axiosInstance = axios.create({ baseURL: APP_API_URL });

const authService = {
  register: async (params: RegisterParams) => { 
    const { firstname, lastname, email, password, account_type } = params; 
    const response = await axiosInstance.post('/register', {
      firstname,
      lastname,
      email,
      password,
      account_type,
    });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await axiosInstance.post(
      '/login',
      { email, password },
      { withCredentials: true },
    );
    return response.data;
  },
  logout: async () => {
    const response = await axiosInstance.post(
      '/logout',
      {},
      { withCredentials: true },
    );
    return response.data;
  },
  checkAuth: async () => {
    const response = await axiosInstance.get('/check-auth', {
      withCredentials: true,
    });
    return response.data;
  },
  addProduct: async () => {
    const response = await axiosInstance.post('/newproduct', {
      withCredentials: true,
    });
    return response.data;
  },
};

export default authService;
