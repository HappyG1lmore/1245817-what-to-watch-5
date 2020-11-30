import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {changeFilterGenre} from "../../store/films/actions";

const GenresList = (props) => {
  const {
    filmGenres,
    changeFilterGenreAction,
  } = props;

  const handleMouseClick = (genre) => {
    changeFilterGenreAction(genre);
  };

  return (
      <>
        {filmGenres.map((genre) => (
          <li
            key={genre}
            className={
              `catalog__genres-item
              ${genre === props.genre
                ? `catalog__genres-item--active`
                : ``
              }`
            }
          >
            <div
              className={`catalog__genres-link`}
              onClick={() => handleMouseClick(genre)}
            >
              {genre}
            </div>
          </li>
        ))}
      </>
  );
};

GenresList.propTypes = {
  filmGenres: PropTypes.array,
  changeFilterGenreAction: PropTypes.func,
  filterFilmsByGenreAction: PropTypes.func,
  genre: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    genre: state.films.genre
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilterGenreAction: (genre) => dispatch(changeFilterGenre(genre)),
  };
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
