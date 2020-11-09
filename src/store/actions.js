import {adaptFilmsToClient} from "../utils";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  FETCH_FILMS_SUCCESS: `FETCH_FILMS_SUCCESS`,
};

export const changeFilterGenre = (genre) => {
  return {
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre
  };
};

const onFilmsFetchSuccess = (films) => {
  return {
    type: ActionType.FETCH_FILMS_SUCCESS,
    payload: adaptFilmsToClient(films)
  };
};

export const fetchFilms = () => {
  return (dispatch, getState, api) => {
    api.getFilms()
      .then((films) => {
        dispatch(onFilmsFetchSuccess(films));
      })
      .catch(() => {
        console.log(`catch`);
      });
  };
};


