import { AxiosResponse } from 'axios';
import { axiosBaseInstance } from './config';

// GET all recipes
const getRecipes = async () => {
  try {
    const response: AxiosResponse<any> = await axiosBaseInstance({
      method: 'get',
      url: '/recipe/',
    });
    console.log('getting recipes*********************************');
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const recipesServices = {
  getRecipes,
};

export default recipesServices;
