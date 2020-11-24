import {AuthorizationStatus} from "../constants";
import {requireAuthorization, getUserAvatar} from "./users/actions";
import {APIRoute} from "./../constants";
import {onFilmsFetchSuccess} from "./../store/films/actions";

export const fetchFilms = () => {
  return (dispatch, getState, api) => {
    api.get(APIRoute.FILMS)
      .then((res) => {
        dispatch(onFilmsFetchSuccess(res.data));
      })
      .catch(() => {
      });
  };
};

export const checkAuth = () => {
  return (dispatch, getState, api) => {
    api.get(APIRoute.LOGIN)
      .then((res) => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(getUserAvatar(res.data.avatar_url));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const login = (email, password) => {
  return (dispatch, getState, api) => {
    api.post(APIRoute.LOGIN, {email, password})
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  };
};

