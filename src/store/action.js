import {store} from "../index";
import {ALL_GENRES} from "../constants";
import {createRatingText} from "../utils";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  FETCH_FILMS_SUCCESS: `FETCH_FILMS_SUCCESS`,
};

const adaptToClient = (films) => films.map((data) => ({
  id: data.id,
  backgroundColor: data.background_color,
  background: data.background_image,
  poster: data.poster_image,
  frame: data.preview_image,
  title: data.name,
  video: data.preview_video_link,
  genre: data.genre,
  year: String(data.released),
  rating: data.rating,
  ratingText: createRatingText(data.rating),
  ratings: String(data.scores_count),
  description: data.description,
  director: data.director,
  starring: data.starring,
  runtime: data.run_time,
  reviews: ``,
}));


export const changeFilterGenre = (genre) => {
  return {
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre
  };
};

export const filterFilmsByGenre = (genre) => {
  const films = store.getState().filmsList;
  const filteredFilms = films.filter((film) => {
    if (genre === ALL_GENRES) {
      return true;
    }
    return film.genre.includes(genre);
  });
  return {
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: filteredFilms
  };
};

const onFilmsFetchSuccess = (films) => {
  console.log(`adaptive data`, adaptToClient(films));
  return {
    type: ActionType.FETCH_FILMS_SUCCESS,
    payload: adaptToClient(films)
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


