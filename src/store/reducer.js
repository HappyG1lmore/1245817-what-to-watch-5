import {extend} from "../utils";
import {ActionType} from "./action";
/* import {generateFilm} from "../mocks/films";*/
import {ALL_GENRES} from "../constants";

/*
const FILMS_COUNT = 8;
const filmsList = new Array(FILMS_COUNT).fill().map((item, index) => {
  return generateFilm(index);
});
*/


// console.log(`filmsList`, filmsList);

const initialState = {
  genre: ALL_GENRES,
  filmsList: [],
  filteredFilms: [],
  isFilmsFetching: true
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

    case ActionType.FETCH_FILMS_SUCCESS:
      return extend(state, {
        isFilmsFetching: false,
        filmsList: action.payload,
        filteredFilms: action.payload
      });
  }

  return state;
};

export {reducer};
