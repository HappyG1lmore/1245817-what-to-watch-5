import React, {PureComponent} from "react";
import SmallMovieCard from "./../small-movie-card/small-movie-card";
import {propTypesFilmsList} from "../../prop-types";
import {Link} from "react-router-dom";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: ``
    };
    this.props = props;
    this.filmsList = props.filmsList;
    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseLeave = this.onCardMouseLeave.bind(this);
  }

  onCardMouseEnter(id) {
    this.setState({film: id});
  }

  onCardMouseLeave() {
    this.setState({film: ``});
  }

  render() {
    return (
      <React.Fragment>
        {this.filmsList.map((film) => (
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
  filmsList: propTypesFilmsList
};

export default FilmsList;
