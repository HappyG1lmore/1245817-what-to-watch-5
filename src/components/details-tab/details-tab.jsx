import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MINUTES_IN_HOUR} from "../../constants"

export const DetailsTab = (props) => {
  const {film} = props;

  const prettifyRuntime = (runtime) => {
    const hours = Math.floor((runtime / MINUTES_IN_HOUR));
    const minutes = runtime % MINUTES_IN_HOUR;
    return `${hours}h ${minutes}m`;
  };

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
                    {actor}{!isLast && <>, < br/></>}
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
              className="movie-card__details-value">{prettifyRuntime(film.runtime)}</span>
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

