import React from "react";
import PropTypes from "prop-types";
import {filmPropTypes} from "../../common-prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {onCardMouseEnter, onCardMouseLeave, film} = props;

  const handleMouseEnter = () => {
    onCardMouseEnter(film.id);
  };

  const handleMouseLeave = () => {
    onCardMouseLeave();
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link to={`/films/${film.id}`}>
        <div className="small-movie-card__image">
          <img src={film.frame}
            alt="Fantastic Beasts: The Crimes of Grindelwald"
            width="280" height="175"
          />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link" href="movie-page.html">{film.title} </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: filmPropTypes,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func
};

export default SmallMovieCard;
