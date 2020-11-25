import React, {Fragment} from "react";
import PropTypes from "prop-types";


export const DetailsTab = (props) => {
  const {film} = props;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.map((actor, idx) => {
                const isLast = idx === film.starring.length - 1;
                return (
                  <Fragment key={actor}>
                    {actor}{!isLast && < br/>}
                  </Fragment>
                );
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span
              className="movie-card__details-value">{`${Math.floor((film.runtime / 60))}h ${(film.runtime % 60)}m`}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.year}</span>
          </p>
        </div>
      </div>

    </>
  );
};

DetailsTab.propTypes = {
  film: PropTypes.object,
};

