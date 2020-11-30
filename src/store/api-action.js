import {AuthorizationStatus} from "../constants";
import {requireAuthorization, getUserAvatar} from "./users/actions";
import {APIRoute} from "../constants";
import {onFilmsFetchSuccess} from "./films/actions";
import {onFilmInfoFetchSuccess, onFilmPromoFetchSuccess} from "./film/actions";
import {onCommentsFetchSuccess} from "./reviews/actions";
import {
  uploadReviewStart,
  uploadReviewComplete,
  redirectToRoute
} from "./userReview/actions";
import {
  onFavoriteFilmsFetchSuccess,
  toggleFavoriteStart,
  toggleFavoriteComplete
} from "./favorite-films/actions";

export const fetchFilms = () => {
  return (dispatch, getState, api) => {
    return api.get(APIRoute.FILMS)
      .then((res) => {
        dispatch(onFilmsFetchSuccess(res.data));
      });
  };
};

export const fetchFavoriteFilms = () => {
  return (dispatch, getState, api) => {
    return api.get(APIRoute.FAVORITE)
      .then((res) => {
        dispatch(onFavoriteFilmsFetchSuccess(res.data));
      });
  };
};

export const toggleFavorite = (id, status) => (dispatch, getState, api) => {
  dispatch(toggleFavoriteStart());
  return api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      const store = getState();
      const film = store.film.film;
      const promoFilm = store.film.promoFilm;
      dispatch(toggleFavoriteComplete());

      if (film) {
        dispatch(onFilmInfoFetchSuccess(data));
      }

      if (promoFilm.id === id) {
        dispatch(onFilmPromoFetchSuccess(data));
      }
    })
      .catch(() => dispatch(toggleFavoriteComplete()));
};

export const getFilmInfo = (id) => {
  return (dispatch, getState, api) => {
    return api.get(`${APIRoute.FILMS}/${id}`)
      .then((res) => {
        dispatch(onFilmInfoFetchSuccess(res.data));
      });
  };
};

export const getPromoFilm = () => {
  return (dispatch, getState, api) => {
    return api.get(`${APIRoute.FILMS}/promo`)
      .then((res) => {
        dispatch(onFilmPromoFetchSuccess(res.data));
      });
  };
};

export const getComments = (id) => {
  return (dispatch, getState, api) => {
    return api.get(`${APIRoute.COMMENTS}/${id}`)
      .then((res) => {
        dispatch(onCommentsFetchSuccess(res.data));
      });
  };
};

export const checkAuth = () => {
  return (dispatch, getState, api) => {
    return api.get(APIRoute.LOGIN)
      .then((res) => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(getUserAvatar(res.data.avatar_url));
      });
  };
};

export const login = (email, password) => {
  return (dispatch, getState, api) => {
    return api.post(APIRoute.LOGIN, {email, password})
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      });
  };
};

export const uploadReview = (data, id) => (dispatch, getState, api) => {
  dispatch(uploadReviewStart());
  return api.post(`${APIRoute.COMMENTS}/${id}`, data)
    .then(() => dispatch(uploadReviewComplete()))
    .then(() => dispatch(redirectToRoute(`/films/${id}`)));
};


