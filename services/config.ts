import axios from 'axios';

export const serviceTimeout = 1000 * 20; // 20 second timeout

export const axiosBaseInstance = axios.create({
  baseURL: 'https://1xlqmioxw2.execute-api.us-east-1.amazonaws.com/dev',
  timeout: serviceTimeout,
});
