import PropTypes from "prop-types";

export const filmPropTypes = PropTypes.shape({
  id: PropTypes.string,
  poster: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.string,
  genre: PropTypes.array,
  year: PropTypes.string,
  rating: PropTypes.string,
  ratingText: PropTypes.string,
  ratings: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.array,
  runtime: PropTypes.object,
  frame: PropTypes.string,
  reviews: PropTypes.array
});

export const filmsListPropTypes = PropTypes.arrayOf(PropTypes.object);

export const routerPropTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object
};
