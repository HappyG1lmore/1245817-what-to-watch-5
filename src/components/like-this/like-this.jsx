import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {filmsListPropTypes} from "../../common-prop-types";
import {MAX_AMOUNT_SIMILAR_FILM} from "../../constants";
import SmallMovieCard from "../small-movie-card/small-movie-card";

const LikeThis = (props) => {
  const {genre, filmsList, id} = props;
  const similarFilms = filmsList
    .filter((film) => {
      return (film.genre === genre) && (film.id !== id);
    })
    .slice(0, MAX_AMOUNT_SIMILAR_FILM);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">

        {similarFilms.map((film) => (
          <SmallMovieCard
            key={film.id}
            film={film}
          />
        ))}

      </div>
    </section>
  );
};

LikeThis.propTypes = {
  genre: PropTypes.string,
  filmsList: filmsListPropTypes,
  id: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    filmsList: state.films.filmsList,
  };
};

export {LikeThis};
export default connect(mapStateToProps)(LikeThis);
