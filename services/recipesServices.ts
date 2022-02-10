import { AxiosResponse } from 'axios';
import { axiosBaseInstance } from './config';
import { getHeaders } from './headersManager';

// GET all recipes
const getRecipes = async () => {
  const headers = await getHeaders();
  try {
    const response: AxiosResponse<any> = await axiosBaseInstance({
      headers,
      method: 'get',
      url: '/recipes/',
    });
    return response?.data;
  } catch (error) {
    console.log("error", error)
    throw error;
  }
};

const recipesServices = {
  getRecipes,
};

export default recipesServices;
