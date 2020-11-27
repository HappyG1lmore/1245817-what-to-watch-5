import {AuthorizationStatus} from "../constants";
import {requireAuthorization, getUserAvatar} from "./users/actions";
import {APIRoute} from "../constants";
import {onFilmsFetchSuccess} from "./films/actions";
import {onFilmInfoFetchSuccess} from "./film/actions";
import {onCommentsFetchSuccess} from "./reviews/actions";
import {uploadReviewStart, uploadReviewComplete, redirectToRoute} from "./userReview/actions";

export const fetchFilms = () => {
  return (dispatch, getState, api) => {
    api.get(APIRoute.FILMS)
      .then((res) => {
        dispatch(onFilmsFetchSuccess(res.data));
      });
  };
};

export const getFilmInfo = (id) => {
  return (dispatch, getState, api) => {
    api.get(`${APIRoute.FILMS}/${id}`)
      .then((res) => {
        dispatch(onFilmInfoFetchSuccess(res.data));
      });
  };
};

export const getComments = (id) => {
  return (dispatch, getState, api) => {
    api.get(`${APIRoute.COMMENTS}/${id}`)
      .then((res) => {
        dispatch(onCommentsFetchSuccess(res.data));
      });
  };
};

export const checkAuth = () => {
  return (dispatch, getState, api) => {
    api.get(APIRoute.LOGIN)
      .then((res) => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(getUserAvatar(res.data.avatar_url));
      });
  };
};

export const login = (email, password) => {
  return (dispatch, getState, api) => {
    api.post(APIRoute.LOGIN, {email, password})
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      });
  };
};

export const uploadReview = (data, id) => (dispatch, getState, api) => {
  dispatch(uploadReviewStart());
  console.log(`asdasdasd`, data, id);
  api.post(`${APIRoute.COMMENTS}/${id}`, data)
    .then(() => dispatch(uploadReviewComplete()))
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .catch((err) => dispatch(uploadReviewComplete(err)));
};


