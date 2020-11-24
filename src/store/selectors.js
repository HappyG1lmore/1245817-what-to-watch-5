import {createSelector} from "reselect";
import {ALL_GENRES} from "../constants";

export const filteredFilmsSelector = createSelector(
    (state) => state.filmsList,
    (state) => state.genre,
    (filmList, genreFilter) => (
      filmList.filter((film) => {
        if (genreFilter === ALL_GENRES) {
          return true;
        }
        return film.genre === genreFilter;
      })
    )
);

export const genresFilterSelector = createSelector(
    (state) => state.filmsList,
    (filmList) => Array.from(
        filmList.reduce((acc, film) => {
          acc.add(film.genre);
          return acc;
        }, new Set([ALL_GENRES]))
    )
);
