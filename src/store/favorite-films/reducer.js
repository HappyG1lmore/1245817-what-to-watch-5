import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isFavoriteFilmsFetching: true,
  favoriteFilms: [],
  isUploadingFavorite: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_FAVORITE_FILMS_SUCCESS:
      return extend(state, {
        isFavoriteFilmsFetching: false,
        favoriteFilms: action.payload,
      });
    case ActionType.UPLOAD_FAVORITE_FILM:
      return extend(state, {
        isUploadingFavorite: true,
      });
    case ActionType.UPLOAD_FAVORITE_FILM_COMPLETE:
      return extend(state, {
        isUploadingFavorite: false,
      });
    case ActionType.RESET_FAVORITE_FILMS:
      return extend(state, {
        isFavoriteFilmsFetching: true,
        favoriteFilms: []
      });
  }
  return state;
};

export {reducer};
