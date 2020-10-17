import React, {PureComponent} from "react";
import {filmsListPropTypes} from "../../common-prop-types";

import SmallMovieCard from "./../small-movie-card/small-movie-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoveredFilm: null
    };
    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseLeave = this.onCardMouseLeave.bind(this);
  }

  onCardMouseEnter(id) {
    this.setState({hoveredFilm: id});
  }

  onCardMouseLeave() {
    this.setState({hoveredFilm: null});
  }

  render() {
    const {filmsList} = this.props;
    return (
      <React.Fragment>
        {filmsList.map((film) => (
          <SmallMovieCard
            key={film.id}
            film={film}
            onCardMouseEnter={this.onCardMouseEnter}
            onCardMouseLeave={this.onCardMouseLeave}
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
