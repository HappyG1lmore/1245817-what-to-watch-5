import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isFilmInfoFetching: true,
  film: null,
  promoFilm: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_FILM_INFO_SUCCESS:
      return extend(state, {
        isFilmInfoFetching: false,
        film: action.payload,
      });
    case ActionType.CLEAR_FILM_INFO:
      return extend(state, {
        isFilmInfoFetching: true,
        film: null,
      });
    case ActionType.FETCH_FILM_PROMO_SUCCESS:
      return extend(state, {
        promoFilm: action.payload,
      });
  }
  return state;
};

export {reducer};
