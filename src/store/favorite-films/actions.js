import {adaptFilmsToClient} from "../../utils";

export const ActionType = {
  FETCH_FAVORITE_FILMS_SUCCESS: `FETCH_FAVORITE_FILMS_SUCCESS`,
  UPLOAD_FAVORITE_FILM: `UPLOAD_FAVORITE_FILM`,
  UPLOAD_FAVORITE_FILM_COMPLETE: `UPLOAD_FAVORITE_FILM_COMPLETE`,
  RESET_FAVORITE_FILM: `UPLOAD_FAVORITE_FILM`
};

export const onFavoriteFilmsFetchSuccess = (films) => {
  return {
    type: ActionType.FETCH_FAVORITE_FILMS_SUCCESS,
    payload: adaptFilmsToClient(films)
  };
};

export const toggleFavoriteStart = (film) => {
  return {
    type: ActionType.UPLOAD_FAVORITE_FILM,
    payload: film
  };
};

export const toggleFavoriteComplete = () => {
  return {
    type: ActionType.UPLOAD_FAVORITE_FILM_COMPLETE,
  };
};

export const resetFavoriteFilm = () => {
  return {
    type: ActionType.RESET_FAVORITE_FILM,
  };
};
