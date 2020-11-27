import React from "react";
import PropTypes from "prop-types";
import {MAX_STARRING} from "../../constants";

const getStarringString = (starring) => {
  const manyActors = starring.length > MAX_STARRING;
  const actors = starring.slice(0, MAX_STARRING).join(`, `);
  return `${actors} ${manyActors ? `and other` : ``}`;
};

export const OverviewTab = (props) => {
  const {film} = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">
          {String(film.rating).replace(`.`, `,`)}
        </div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{film.ratingText}</span>
          <span className="movie-rating__count">{film.ratings} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director">
          <strong>
          Director: {film.director}
          </strong>
        </p>
        <p className="movie-card__starring">
          <strong>
            {getStarringString(film.starring)}
          </strong>
        </p>
      </div>

    </>
  );
};

OverviewTab.propTypes = {
  film: PropTypes.object,
};

