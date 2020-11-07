import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {filterFilmsByGenre, changeFilterGenre} from "../../store/action";

const GenresList = (props) => {
  const {
    filmGenres,
    changeFilterGenreAction,
    filterFilmsByGenreAction,
  } = props;

  const handleMouseClick = (genre) => {
    changeFilterGenreAction(genre);
    filterFilmsByGenreAction(genre);
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
    genre: state.genre
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    changeFilterGenreAction: (genre) => dispath(changeFilterGenre(genre)),
    filterFilmsByGenreAction: (genre) => dispath(filterFilmsByGenre(genre))
  };
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
