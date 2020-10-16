import PropTypes from "prop-types";

export const propTypesFilm = PropTypes.shape({
  id: PropTypes.string,
  poster: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.string,
  genre: PropTypes.array,
  year: PropTypes.any,
  rating: PropTypes.any,
  ratingText: PropTypes.string,
  ratings: PropTypes.any,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.array,
  runtime: PropTypes.object,
  frame: PropTypes.string,
  reviews: PropTypes.array
});

export const propTypesFilmsList = PropTypes.arrayOf(PropTypes.object);
