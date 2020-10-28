import {extend} from "./utils";
import {ActionType} from "./action";
import {generateFilm} from "./mocks/films";
import {ALL_GENRES} from "./constants";

const FILMS_COUNT = 8;
const filmsList = new Array(FILMS_COUNT).fill().map((item, index) => {
  return generateFilm(index);
});

const initialState = {
  genre: ALL_GENRES,
  filmsList,
  filteredFilms: filmsList
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.FILTER_FILMS_BY_GENRE:
      return extend(state, {
        filteredFilms: action.payload
      });
  }

  return state;
};

export {reducer};
