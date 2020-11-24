import {extend} from "../../utils";
import {ActionType} from "./actions";
import {ALL_GENRES} from "../../constants";

const initialState = {
  genre: ALL_GENRES,
  filmsList: [],
  isFilmsFetching: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.FETCH_FILMS_SUCCESS:
      return extend(state, {
        isFilmsFetching: false,
        filmsList: action.payload,
      });
  }
  return state;
};

export {reducer};
