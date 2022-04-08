import axios from 'axios';

const BASE_URL = 'https://localhost:3000';

const api = axios.create({baseURL: BASE_URL});

const errorHandler = (error: any) => {
  const errors = error.response?.data?.errors;
  if (errors && Object.entries(errors).length > 0) {
    let errorMsg = '';
    Object.entries(error.response?.data?.errors).forEach(keyValue => {
      errorMsg += `${keyValue[1]}\n`;
    });
    error.message = errorMsg;
  } else if (error.response?.data?.message) {
    error.message = error.response?.data?.message;
  }
  return Promise.reject(error);
};

const getToken = async (config: any, json: boolean = false) => {
  // const token = await getStorage();
  const token = '';
  config.headers = {
    Authorization: `Bearer ${token ?? ''}`,
  };

  if (json) {
    config.headers.Accept = 'application/json';
  }

  return config;
};

api.interceptors.response.use(res => res, errorHandler);
api.interceptors.request.use(config => getToken(config, true));

export const setToken = (token: string) => {
  api.defaults.headers = {
    //@ts-ignore
    Authorization: `Bearer ${token}`,
  };
};

export {api};
