import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {propTypesFilm} from "../../prop-types";
import {Link} from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    const {film, onCardMouseEnter, onCardMouseLeave} = props;
    this.film = film;
    this.onCardMouseEnter = onCardMouseEnter;
    this.onCardMouseLeave = onCardMouseLeave;
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.onCardMouseEnter(this.film.id);
  }

  handleMouseLeave() {
    this.onCardMouseLeave();
  }

  render() {
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <Link to={`/films/${this.film.id}`}>
          <div className="small-movie-card__image" >
            <img src={this.film.frame}
              alt="Fantastic Beasts: The Crimes of Grindelwald"
              width="280" height="175"
            />
          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${this.film.id}`} className="small-movie-card__link" href="movie-page.html">{this.film.title} </Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: propTypesFilm,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func
};

export default SmallMovieCard;
