import PropTypes from "prop-types";

export const filmPropTypes = PropTypes.shape({
  id: PropTypes.number,
  poster: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
  rating: PropTypes.number,
  ratingText: PropTypes.string,
  ratings: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.array,
  runtime: PropTypes.number,
  frame: PropTypes.string,
  reviews: PropTypes.string
});

export const filmsListPropTypes = PropTypes.arrayOf(PropTypes.object);

export const routerPropTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object
};
