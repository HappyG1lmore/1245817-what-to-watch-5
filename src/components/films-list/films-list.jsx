import React, {PureComponent} from "react";
import {filmsListPropTypes} from "../../common-prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoveredFilm: null,
      playedFilm: null
    };

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseLeave = this.onCardMouseLeave.bind(this);
    this.timeout = null;
  }

  onCardMouseEnter(id) {
    this.timeout = setTimeout(() => {
      this.setState(() => {
        return {
          hoveredFilm: id,
          playedFilm: id
        };
      });
    },
    1000);
  }

  onCardMouseLeave() {
    clearTimeout(this.timeout);
    this.setState(() => {
      return {
        hoveredFilm: null,
        playedFilm: null
      };
    });
  }

  render() {
    const {filmsList} = this.props;
    const {playedFilm} = this.state;
    return (
      <React.Fragment>
        {filmsList.map((film) => (
          <SmallMovieCard
            key={film.id}
            film={film}
            onCardMouseEnter={this.onCardMouseEnter}
            onCardMouseLeave={this.onCardMouseLeave}
            playedFilm={playedFilm}
          />
        ))}
      </React.Fragment>
    );
  }
}

FilmsList.propTypes = {
  filmsList: filmsListPropTypes
};

export default FilmsList;
