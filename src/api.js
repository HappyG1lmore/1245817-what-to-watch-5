import axios from "axios";
import {API_TIMEOUT} from "./constants";
import {Error} from "./constants";

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://5.react.pages.academy/wtw`,
    timeout: API_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) =>{
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export const getFilms = () => {
  const api = createAPI();
  return api.get(`/films`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(`Ошибка`, err.response.data.error);
    });
};

export const authorization = () => {
  const api = createAPI();
  return api.get(`/login`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(`Ошибка`, err.response.data.error);
    });
};

export const sendUserData = ({login: email, password}) => {
  const api = createAPI();
  return api.post(`/login`, {email, password})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(`Ошибка`, err.response.data.error);
    });
};

export const api = {getFilms, authorization, sendUserData};
