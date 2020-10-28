import {store} from "./index";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
};

export const changeFilterGenre = (genre) => {
  return {
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre
  };
};

export const filterFilmsByGenre = (genre) => {
  const films = store.getState().filmsList;
  const filteredFilms = films.filter((film) => {
    if (genre === `All`) {
      return true;
    }
    return film.genre.includes(genre);
  });
  return {
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: filteredFilms
  };
};
