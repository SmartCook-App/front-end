import { AxiosResponse } from 'axios';
import { axiosBaseInstance } from './config';
import { getHeaders } from './headersManager';

// GET all recipes
const getRecipes = async () => {
  try {
    const headers = await getHeaders();
    const response: AxiosResponse<any> = await axiosBaseInstance({
      headers,
      method: 'get',
      url: '/recipe/',
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const recipesServices = {
  getRecipes,
};

export default recipesServices;
