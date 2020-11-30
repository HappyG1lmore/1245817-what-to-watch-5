import axios from "axios";
import {API_TIMEOUT} from "../constants";
import {HttpCode} from "../constants";

export const createAPI = (onUnauthorized, onAnyOtherError) => {
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

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    if (response && response.status === HttpCode.BAD_REQUEST) {
      throw err;
    }

    onAnyOtherError();
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};


