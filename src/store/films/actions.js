import {adaptFilmsToClient, adaptFilmToClient} from "../../utils";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  FETCH_FILMS_SUCCESS: `FETCH_FILMS_SUCCESS`,
  FILM_INFO: `FILM_INFO`,
  GET_COMMENTS: `GET_COMMENTS`,
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

export const onFilmInfo = (filmInfo) => {
  return {
    type: ActionType.FILM_INFO,
    payload: adaptFilmToClient(filmInfo)
  };
};

export const getCommentsList = (comments) => {
  return {
    type: ActionType.GET_COMMENTS,
    payload: comments,
  };
};

