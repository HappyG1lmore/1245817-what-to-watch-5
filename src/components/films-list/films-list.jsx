import React from "react";
import {filmsListPropTypes} from "../../common-prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";

const FilmsList = (props) => {

  const {filmsList} = props;

  return (
    <React.Fragment>
      {filmsList.map((film) => (
        <SmallMovieCard
          key={film.id}
          film={film}
        />
      ))}
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: filmsListPropTypes
};

export default FilmsList;
