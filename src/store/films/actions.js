import {adaptFilmsToClient} from "../../utils";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  FETCH_FILMS_SUCCESS: `FETCH_FILMS_SUCCESS`,
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


