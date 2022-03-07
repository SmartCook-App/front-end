import { AxiosResponse } from 'axios';
import { axiosBaseInstance } from './config';
import { getHeaders } from './headersManager';

// GET all categories
const getCategories = async () => {
  const headers = await getHeaders();
  try {
    const response: AxiosResponse<any> = await axiosBaseInstance({
      headers,
      method: 'get',
      url: '/dishcategories/',
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const dishCategoriesServices = {
  getCategories,
};

export default dishCategoriesServices;
