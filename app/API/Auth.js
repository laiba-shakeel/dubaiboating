import axios from 'axios';
import { storeUser } from '../Helpers/authStorage'; // make sure this path is correct

const BASE_URL = 'https://api.dubaiboating.com/public/api';

export const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);

    if (response.data?.user) {
      await storeUser(response.data.user); // Store user in AsyncStorage
    }

    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw error;
  }
};

export const LoginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, loginData);

    if (response.data?.user) {
      await storeUser(response.data.user); // Store user in AsyncStorage
    }

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error;
  }
};
