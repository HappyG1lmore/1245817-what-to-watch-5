import React from "react";
import PropTypes from "prop-types";
import {filmPropTypes} from "../../common-prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../../components/video-player/video-player";

const SmallMovieCard = (props) => {
  let {onCardMouseEnter, onCardMouseLeave, film, playedFilm} = props;

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
        <VideoPlayer
          film={film}
          playedFilm={playedFilm}
        />
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
  onCardMouseLeave: PropTypes.func,
  playedFilm: PropTypes.any
};

export default SmallMovieCard;
