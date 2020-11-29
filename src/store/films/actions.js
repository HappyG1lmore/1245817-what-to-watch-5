import {adaptFilmsToClient} from "../../utils";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  FETCH_FILMS_SUCCESS: `FETCH_FILMS_SUCCESS`,
  FILM_INFO: `FILM_INFO`,
  GET_COMMENTS: `GET_COMMENTS`,
  CLEAR_FILM_INFO: `CLEAR_FILM_INFO`,
  FETCH_FAVORITE_FILMS_SUCCESS: `FETCH_FAVORITE_FILMS_SUCCESS`
};

export const changeFilterGenre = (genre) => {
  return {
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre
  };
};

export const onFilmsFetchSuccess = (films) => {
  return {
    type: ActionType.FETCH_FILMS_SUCCESS,
    payload: adaptFilmsToClient(films)
  };
};

export const onFavoriteFilmsFetchSuccess = (films) => {
  return {
    type: ActionType.FETCH_FAVORITE_FILMS_SUCCESS,
    payload: adaptFilmsToClient(films)
  };
};


